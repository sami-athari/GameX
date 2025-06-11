@extends('admin.layout')

@section('title', 'Edit Produk')

@section('content')
<div class="pt-16">
<div class="bg-gaming-card p-6 rounded-lg shadow-lg">
    <h2 class="text-2xl font-bold mb-6 text-gaming-red-600">Edit Produk</h2>
    <form action="{{ route('produk.update', $produk->id) }}" method="POST" enctype="multipart/form-data" class="space-y-4">
        @csrf
        @method('PUT')
        <div class="flex flex-col">
            <label for="kode_produk" class="text-gray-300 mb-1">Kode Produk</label>
            <input type="text" name="kode_produk" class="bg-gaming-dark text-white border border-gray-700 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-gaming-red-600" value="{{ $produk->kode_produk }}" required>
        </div>
        <div class="flex flex-col">
            <label for="nama" class="text-gray-300 mb-1">Nama</label>
            <input type="text" name="nama" class="bg-gaming-dark text-white border border-gray-700 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-gaming-red-600" value="{{ $produk->nama }}" required>
        </div>
        <div class="flex flex-col">
            <label for="harga" class="text-gray-300 mb-1">Harga</label>
            <input type="number" name="harga" class="bg-gaming-dark text-white border border-gray-700 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-gaming-red-600" value="{{ $produk->harga }}" required>
        </div>
        <div class="flex flex-col">
            <label for="stok" class="text-gray-300 mb-1">Stok</label>
            <input type="number" name="stok" class="bg-gaming-dark text-white border border-gray-700 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-gaming-red-600" value="{{ $produk->stok }}" required>
        </div>
        <div class="flex flex-col">
            <label for="kategori" class="text-gray-300 mb-1">Kategori</label>
            <select name="kategori_id" class="bg-gaming-dark text-white border border-gray-700 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-gaming-red-600" required>
                <option value="" class="text-gray-500">Pilih Kategori</option>
                @foreach($kategoris as $kategori)
                    <option value="{{ $kategori->id }}" {{ $produk->kategori_id == $kategori->id ? 'selected' : '' }}>{{ $kategori->nama }}</option>
                @endforeach
            </select>
        </div>
        <div class="flex flex-col">
            <label for="platform" class="text-gray-300 mb-1">Platform</label>
            <input type="text" name="platform" class="bg-gaming-dark text-white border border-gray-700 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-gaming-red-600" value="{{ $produk->platform }}" required>
        </div>
        <div class="flex flex-col">
            <label for="gambar" class="text-gray-300 mb-1">Gambar Produk</label>
            <input type="file" name="gambar" class="bg-gaming-dark text-white border border-gray-700 rounded-lg p-2" accept="image/*">
            @if($produk->gambar)
                <div class="mt-2">
                    <img src="{{ asset('storage/' . $produk->gambar) }}" alt="Gambar Produk" class="max-w-xs rounded-lg">
                </div>
            @endif
        </div>
        @if($produk->zip_file)
            <p class="text-gray-300">File ZIP sudah ada: {{ $produk->zip_file }}</p>
        @endif
        <button type="submit" class="bg-gaming-red-600 text-white px-4 py-2 rounded-lg hover:bg-gaming-red-500 transition duration-300">Simpan Perubahan</button>
    </form>
</div>
@endsection
