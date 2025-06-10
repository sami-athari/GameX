@extends('admin.layout')

@section('title', 'Transaksi Manager')

@section('content')
<div class="bg-gaming-card p-6 rounded-lg shadow-lg">
    <div class="flex justify-between items-center mb-6">
        <h2 class="text-2xl font-bold text-gaming-red-600">Data Transaksi</h2>
        <a href="{{ route('adminHome') }}" class="text-gray-300 hover:text-gaming-red-600">Beranda</a>
    </div>
    @if(session('success'))
        <div class="bg-green-500 text-white p-4 rounded-lg mb-4">{{ session('success') }}</div>
    @endif
    <div class="overflow-x-auto">
        <table class="w-full text-left">
            <thead class="bg-gaming-dark">
                <tr>
                    <th class="p-3 text-gray-300">Kode Tiket</th>
                    <th class="p-3 text-gray-300">Nama Pembeli</th>
                    <th class="p-3 text-gray-300">Harga</th>
                    <th class="p-3 text-gray-300">Status</th>
                    <th class="p-3 text-gray-300">Tanggal Transaksi</th>
                    <th class="p-3 text-gray-300">Aksi</th>
                </tr>
            </thead>
            <tbody>
                @foreach($transaksis as $transaksi)
                    <tr class="border-b border-gray-700 hover:bg-gaming-hover">
                        <td class="p-3">{{ $transaksi->kode_produk }}</td>
                        <td class="p-3">{{ $transaksi->nama_user }}</td>
                        <td class="p-3">{{ $transaksi->harga }}</td>
                        <td class="p-3" style="color: {{ $transaksi->status == 'Selesai' ? '#10b981' : ($transaksi->status == 'Pending' ? '#ef4444' : '#ffffff') }}">{{ $transaksi->status }}</td>
                        <td class="p-3">{{ $transaksi->created_at }}</td>
                        <td class="p-3 flex space-x-2">
                            <form action="{{ route('transaksi.batal', $transaksi->id) }}" method="POST">
                                @csrf
                                <button type="submit" class="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-400 transition duration-300" onclick="return confirm('Yakin ingin membatalkan transaksi ini?')">Batalkan</button>
                            </form>
                            <form action="{{ route('transaksi.konfirmasi', $transaksi->id) }}" method="POST">
                                @csrf
                                <button type="submit" class="bg-green-500 text-white px-3 py-1 rounded-lg hover:bg-green-400 transition duration-300">Konfirmasi</button>
                            </form>
                        </td>
                    </tr>
                @endforeach
            </tbody>
        </table>
    </div>
</div>
@endsection
