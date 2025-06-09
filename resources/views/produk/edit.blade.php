@extends('layouts.app')

@section('content')
    <div class="container">
        <h2>Edit Produk</h2>
        <form action="{{ route('produk.update', $produk->id) }}" method="POST" enctype="multipart/form-data">
            @csrf
            @method('PUT')

            <div class="form-group">
                <label for="kode_produk">Kode Produk</label>
                <input type="text" name="kode_produk" class="form-control" value="{{ $produk->kode_produk }}" required>
            </div>

            <div class="form-group">
                <label for="nama">Nama</label>
                <input type="text" name="nama" class="form-control" value="{{ $produk->nama }}" required>
            </div>

            <div class="form-group">
                <label for="harga">Harga</label>
                <input type="number" name="harga" class="form-control" value="{{ $produk->harga }}" required>
            </div>

            <div class="form-group">
                <label for="stok">Stok</label>
                <input type="number" name="stok" class="form-control" value="{{ $produk->stok }}" required>
            </div>

            <div class="form-group">
                <label for="kategori">Kategori</label>
                <select name="kategori_id" class="form-control" required>
                    <option value="">Pilih Kategori</option>
                    <!-- Loop through categories from the database -->
                    @foreach($kategoris as $kategori)
                        <option value="{{ $kategori->id }}" {{ $produk->kategori_id == $kategori->id ? 'selected' : '' }}>
                            {{ $kategori->nama }}
                        </option>
                    @endforeach
                </select>
            </div>

            <div class="form-group">
                <label for="platform">Platform</label>
                <input type="text" name="platform" class="form-control" value="{{ $produk->platform }}" required>
            </div>

            <div class="form-group">
                <label for="gambar">Gambar Produk</label>
                <input type="file" name="gambar" class="form-control" accept="image/*">
                @if($produk->gambar)
                    <div class="mt-2">
                        <img src="{{ asset('storage/' . $produk->gambar) }}" alt="Gambar Produk" style="max-width: 200px;">
                    </div>
                @endif
            </div>
            @if($produk->zip_file)
                <p>File ZIP sudah ada: {{ $produk->zip_file }}</p>
            @endif

            <button type="submit" class="btn btn-primary">Simpan Perubahan</button>
        </form>
    </div>
@endsection