<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Produk;
use App\Models\User;
use App\Models\Cart;
use App\Models\Transaksi;
use Barryvdh\DomPDF\Facade\Pdf;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Response;
use Illuminate\Support\Str;

class PembelianController extends Controller
{
    public function index(Request $request)
{
    $query = Produk::query();

    if ($request->has('search')) {
        $search = $request->search;
        $query->where('nama_produk', 'like', '%' . $search . '%');
    }

    $tikets = $query->get();
    $users = User::all();
    $carts = Cart::all();
    return view('transaksi.transaksi', compact('tikets', 'users', 'carts'));
}



    public function transaksiCart()
    {
        $carts = Cart::where('user_id', Auth::id())->get();
        return view('transaksi.cart', compact('carts'));
    }

    public function beli(Request $request)
    {
        $request->validate([
            'produk_id' => 'required|exists:produks,id',
        ]);

        $produk = Produk::findOrFail($request->produk_id);

        if ($produk->stok < 1) {
            return back()->with('error', 'Stok produk habis!');
        }

        $produk->decrement('stok');

        Cart::create([
            'user_id'     => Auth::id(),
            'produk_id'   => $produk->id,
            'nama_produk' => $produk->nama,
            'gambar'      => $produk->gambar,
            'harga'       => $produk->harga,
            'status'      => 'Pending',
        ]);

        return redirect()->route('transaksi.cart')
                         ->with('success', 'Produk berhasil ditambahkan ke cart!');
    }

    public function clearcart($id)
    {
        $cart = Cart::where('id', $id)->where('user_id', Auth::user()->id)->first();
        if ($cart) {
            $cart->delete();
            return redirect()->route('transaksi.cart')->with('success', 'Item berhasil dihapus dari cart.');
        }
        return redirect()->route('transaksi.cart')->with('error', 'Item tidak ditemukan.');
    }

    public function transaksiIndex()
    {
        $user = Auth::user();
        $transaksis = Transaksi::where('user_id', $user->id)->get();
        return view('transaksi.transaksi', compact('transaksis'));
    }

    public function transaksiIndexManager()
    {
        $transaksis = Transaksi::all();
        return view('transaksi.transaksiManager', compact('transaksis'));
    }

    public function bayar(Request $request)
{
    $request->validate([
        'cart_id' => 'required|exists:carts,id',
    ]);

    $cart = Cart::where('id', $request->cart_id)
                ->where('user_id', Auth::id())
                ->firstOrFail();

    Transaksi::create([
        'user_id'     => Auth::id(),
        'produk_id'   => $cart->produk_id,
        'nama_produk' => $cart->nama_produk,
        'gambar'      => $cart->gambar,
        'harga'       => $cart->harga,
        'status'      => 'pending', // lowercase biar konsisten
    ]);

    $cart->delete();

    return redirect()->route('transaksi.transaksi')
                     ->with('success', 'Produk berhasil dibayar!');
}



    public function hapus($id)
    {
        $transaksi = Transaksi::find($id);
        if ($transaksi) {
            $transaksi->delete();
            return redirect()->route('transaksi.transaksiManager')
                ->with('success', 'Transaksi berhasil dihapus');
        }
        return redirect()->route('transaksi.transaksiManager')
            ->with('error', 'Transaksi tidak ditemukan.');
    }

    public function clear($id)
    {
        $transaksi = Transaksi::find($id);
        if ($transaksi) {
            $transaksi->delete();
            return redirect()->route('transaksi.transaksi')
                ->with('success', 'Transaksi berhasil dibatalkan');
        }
        return redirect()->route('transaksi.transaksi')
            ->with('error', 'Transaksi tidak ditemukan.');
    }

    public function konfirmasiStatus($id)
    {
        $transaksi = Transaksi::find($id);
        if ($transaksi) {
            $transaksi->status = 'Selesai';
            $transaksi->save();
            return redirect()->route('transaksi.transaksiManager')
                ->with('success', 'Transaksi berhasil dikonfirmasi.');
        }
        return redirect()->route('transaksi.transaksiManager')
            ->with('error', 'Transaksi tidak ditemukan.');
    }

    public function batal($id)
    {
        $transaksi = Transaksi::findOrFail($id);
        $transaksi->status = 'dibatalkan';
        $transaksi->save();

        return redirect()->back()->with('success', 'Transaksi berhasil dibatalkan.');
    }

    public function generatePdf($id)
    {
        $transaksi = Transaksi::find($id);
        if (!$transaksi) {
            return redirect()->back()->with('error', 'Transaksi tidak ditemukan.');
        }

        $pdf = PDF::loadView('transaksi.pdf', compact('transaksi'));
        return $pdf->download('transaksi-' . $transaksi->kode_produk . '.pdf');
    }

    public function library(Request $request)
{
    $user = Auth::user();

    $query = Transaksi::with('produk')
        ->where('user_id', $user->id)
        ->where('status', 'Selesai')
        ->whereHas('produk');

    if ($request->has('search')) {
        $query->whereHas('produk', function ($q) use ($request) {
            $q->where('nama_produk', 'like', '%' . $request->search . '%');
        });
    }

    $transaksis = $query->get();
    $games = Produk::all();

    return view('transaksi.library', compact('transaksis', 'games'));
}


    public function mainkan($id)
{
    // Ambil data produk, kalau mau
    $produk = Produk::findOrFail($id);

    // Kirim ke view
    return view('play', compact('produk'));
}





    public function downloadGame($id)
    {
        $user = Auth::user();

        $transaksi = Transaksi::with('produk')
            ->where('id', $id)
            ->where('user_id', $user->id)
            ->where('status', 'Selesai')
            ->first();

        if (!$transaksi || !$transaksi->produk) {
            return redirect()->back()->with('error', 'File game tidak ditemukan atau belum selesai transaksi.');
        }

        // Ambil path relatif dari kolom zip_file (sudah termasuk "storage/games_zip/xxx.zip")
        $zipRelativePath = $transaksi->produk->zip_file;

        // Perbaikan: langsung ke public_path()
        $zipPath = public_path($zipRelativePath);

        if (File::exists($zipPath)) {
            return response()->download($zipPath);
        }

        return redirect()->back()->with('error', 'File ZIP tidak ditemukan di server.');
    }

    public function hapusDariLibrary($id)
    {
        $transaksi = Transaksi::find($id);
        if ($transaksi) {
            $transaksi->delete();
            return redirect()->route('transaksi.library')
                ->with('success', 'Game berhasil dihapus dari library!');
        }
        return redirect()->route('transaksi.library')
            ->with('error', 'Game tidak ditemukan.');
    }




}
