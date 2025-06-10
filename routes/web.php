<?php

use App\Http\Controllers\ProdukController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;
use App\Models\Produk;
use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Auth\RegisterController;
use App\Http\Controllers\Auth\LogoutController;
use App\Http\Controllers\KategoriController;
use App\Http\Controllers\PembelianController;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\BerandaControllers;

// Landing page
Route::get('/', function () {
    $produks = Produk::latest()->get(); // Ambil produk terbaru

    return view('welcome', ['produks' => $produks]);
});

// Auth routes
Auth::routes();

// Login
Route::get('/login', [LoginController::class, 'showLoginForm'])->name('login');
Route::post('/login', [LoginController::class, 'login'])->name('login.post');

// Logout
Route::post('/logout', [LogoutController::class, 'signout'])->name('logout');

// Register
Route::get('/register', [RegisterController::class, 'showRegistrationForm'])->name('register');
Route::post('/register', [RegisterController::class, 'register'])->name('register.post');

// User routes
Route::middleware(['auth', 'user-access:user'])->group(function () {
    Route::get('/home', [HomeController::class, 'index'])->name('home');
});

// Admin routes
Route::middleware(['auth', 'user-access:admin'])->group(function () {
    Route::get('/admin/home', [HomeController::class, 'adminHome'])->name('admin.home');
    Route::get('/admin/play-game/{id}', [ProdukController::class, 'mainkan'])->name('admin.play');
});

// Produk (admin)
Route::get('/produk', [ProdukController::class, 'index'])->name('adminHome');
Route::get('/produk/create', [ProdukController::class, 'create'])->name('produk.create');
Route::post('/produk', [ProdukController::class, 'store'])->name('produk.store');
Route::get('/produk/{id}', [ProdukController::class, 'show'])->name('produk.show');
Route::get('/produk/{id}/edit', [ProdukController::class, 'edit'])->name('produk.edit');
Route::put('/produk/{id}', [ProdukController::class, 'update'])->name('produk.update');
Route::delete('/produk/{id}', [ProdukController::class, 'destroy'])->name('produk.destroy');

// Kategori
Route::resource('kategori', KategoriController::class);

// Deskripsi produk
Route::get('/deskripsi/{id}', [ProdukController::class, 'deskripsi'])->name('deskripsi');

// Transaksi
Route::post('/transaksi/beli', [PembelianController::class, 'beli'])->name('transaksi.beli');
Route::post('/bayar', [PembelianController::class, 'bayar'])->name('transaksi.bayar'); // ✅ cukup 1x
Route::get('/cart', [PembelianController::class, 'transaksiCart'])->name('transaksi.cart');
Route::get('/transaksi/{id}/clearcart', [PembelianController::class, 'clearcart'])->name('transaksi.clearcart');
Route::get('/transaksi/cart', [PembelianController::class, 'transaksiCart'])->name('transaksi.cart');
Route::get('/transaksi2', [PembelianController::class, 'transaksiIndex'])->name('transaksi.transaksi');
Route::delete('/transaksi/{id}', [PembelianController::class, 'hapus'])->name('transaksi.hapus');
Route::post('/transaksi/{id}/batal', [PembelianController::class, 'batal'])->name('transaksi.batal');
Route::delete('/transaksi/user/{id}', [PembelianController::class, 'clear'])->name('transaksi.clear');
Route::post('/transaksi/konfirmasi/{id}', [PembelianController::class, 'konfirmasiStatus'])->name('transaksi.konfirmasi');
Route::get('/transaksi/cetak/{id}', [PembelianController::class, 'generatePdf'])->name('transaksi.cetak');
Route::get('/transaksi/transaksiManager', [PembelianController::class, 'transaksiIndexManager'])->name('transaksi.transaksiManager');
Route::get('/transaksi/search', [App\Http\Controllers\PembelianController::class, 'search'])->name('transaksi.search');


// Library
Route::middleware(['auth', 'user-access:user'])->group(function () {
    Route::get('/library', [PembelianController::class, 'library'])->name('transaksi.library');
    Route::get('/library/mainkan/{id}', [PembelianController::class, 'mainkan'])->name('user.library.play');
    Route::get('/library/download/{id}', [PembelianController::class, 'downloadGame'])->name('user.library.download');
    Route::get('/transaksi/library', [PembelianController::class, 'library'])->name('user.transaksi.library');
});
Route::delete('/library/{id}/delete', [PembelianController::class, 'hapusDariLibrary'])->name('user.library.delete');

Route::middleware('guest')->group(function () {
    Route::view('login', 'auth.login')->name('login');
    Route::view('register', 'auth.register')->name('register');
});

Route::middleware(['auth'])->group(function () {
    Route::get('/produk/{id}', [ProdukController::class, 'show'])->name('produk.show');
    Route::get('/deskripsi/{id}', [ProdukController::class, 'deskripsi'])->name('deskripsi'); // <- Tambahan
    Route::post('/cart/add/{id}', [PembelianController::class, 'add'])->name('cart.add');
    Route::post('/beli', [PembelianController::class, 'beli'])->name('transaksi.beli'); // <- Pastikan ini ada juga
});
