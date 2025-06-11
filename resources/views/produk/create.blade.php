@extends('admin.layout')

@section('title', 'Tambah Game')

@section('content')
<div class="pt-16">
<div class="bg-gaming-card p-6 rounded-lg shadow-lg">
    <h2 class="text-2xl font-bold mb-6 text-gaming-red-600">Tambah Game</h2>
    <form action="{{ route('produk.store') }}" method="POST" enctype="multipart/form-data" class="space-y-4">
        @csrf
        <div class="flex flex-col">
            <label for="kode_produk" class="text-gray-300 mb-1">Kode Produk</label>
            <input type="text" name="kode_produk" class="bg-gaming-dark text-white border border-gray-700 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-gaming-red-600" required>
        </div>
        <div class="flex flex-col">
            <label for="nama" class="text-gray-300 mb-1">Nama</label>
            <input type="text" name="nama" class="bg-gaming-dark text-white border border-gray-700 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-gaming-red-600" required>
        </div>
        <div class="flex flex-col">
            <label for="harga" class="text-gray-300 mb-1">Harga</label>
            <input type="number" name="harga" class="bg-gaming-dark text-white border border-gray-700 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-gaming-red-600" required>
        </div>
        <div class="flex flex-col">
            <label for="stok" class="text-gray-300 mb-1">Stok</label>
            <input type="number" name="stok" class="bg-gaming-dark text-white border border-gray-700 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-gaming-red-600" required>
        </div>
        <div class="flex flex-col">
            <label for="kategori" class="text-gray-300 mb-1">Kategori</label>
            <select name="kategori_id" class="bg-gaming-dark text-white border border-gray-700 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-gaming-red-600" required>
                <option value="" class="text-gray-500">Pilih Kategori</option>
                @foreach($kategoris as $kategori)
                    <option value="{{ $kategori->id }}">{{ $kategori->nama }}</option>
                @endforeach
            </select>
        </div>
        <div class="flex flex-col">
            <label for="platform" class="text-gray-300 mb-1">Platform</label>
            <input type="text" name="platform" class="bg-gaming-dark text-white border border-gray-700 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-gaming-red-600" required>
        </div>
        <div class="flex flex-col">
            <label for="deskripsi" class="text-gray-300 mb-1">Deskripsi</label>
            <textarea name="deskripsi" class="bg-gaming-dark text-white border border-gray-700 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-gaming-red-600" rows="4"></textarea>
        </div>
        <div class="flex flex-col">
            <label for="file_game" class="text-gray-300 mb-1">File Game (ZIP)</label>
            <input type="file" name="zip_file" class="bg-gaming-dark text-white border border-gray-700 rounded-lg p-2" accept=".zip">
        </div>
        <div class="flex flex-col">
            <label for="gambar" class="text-gray-300 mb-1">Gambar Produk</label>
            <input type="file" name="gambar" class="bg-gaming-dark text-white border border-gray-700 rounded-lg p-2" accept="image/*">
        </div>
        <button type="submit" class="bg-gaming-red-600 text-white px-4 py-2 rounded-lg hover:bg-gaming-red-500 transition duration-300">Simpan</button>
    </form>
</div>
@endsection
