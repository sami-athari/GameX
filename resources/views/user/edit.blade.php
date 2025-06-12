<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Edit Product - GameX</title>
    <!-- Tailwind CSS -->
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        'gaming-dark': '#2d3748',
                        'gaming-darker': '#1a202c',
                        'gaming-red-600': '#dc2626',
                        'gaming-red-500': '#ef4444',
                        'gaming-blue': '#4299e1',
                        'gaming-card': '#4a5568',
                        'gaming-hover': '#2c3746',
                    },
                    fontFamily: { sans: ['Figtree', 'sans-serif'] },
                }
            }
        }
    </script>
    <style>
        .glass {
            backdrop-filter: blur(8px);
            background: rgba(26, 32, 44, 0.7);
        }
        .hover-lift {
            transition: transform 0.3s ease;
        }
        .hover-lift:hover {
            transform: translateY(-4px);
        }
        .btn-gaming {
            background-color: rgba(255, 255, 255, 0.1);
            transition: background-color 0.3s ease, transform 0.3s ease;
        }
        .btn-gaming:hover {
            background-color: rgba(255, 255, 255, 0.2);
            transform: translateY(-2px);
        }
        .btn-gaming-red {
            background-color: #dc2626;
            color: white;
            transition: background-color 0.3s ease, transform 0.3s ease;
        }
        .btn-gaming-red:hover {
            background-color: #ef4444;
            transform: translateY(-2px);
        }
    </style>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" rel="stylesheet">
</head>
<body class="bg-gaming-darker text-white font-sans">
    @include('user.navbar')

    <section class="pt-20 pb-10 bg-gaming-dark">
        <div class="max-w-4xl mx-auto px-6">
            <h1 class="text-4xl font-extrabold text-white mb-8 text-center">Edit Produk</h1>

            @if ($errors->any())
                <div class="bg-gaming-red-600 text-white p-4 rounded-lg mb-6">
                    <ul>
                        @foreach ($errors->all() as $error)
                            <li>{{ $error }}</li>
                        @endforeach
                    </ul>
                </div>
            @endif

            <form action="{{ route('user.produk.store') }}" method="POST" enctype="multipart/form-data" class="bg-gaming-card p-6 rounded-xl shadow-lg">
                @csrf
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label class="block text-white mb-2" for="kode_produk">Kode Produk</label>
                        <input type="text" name="kode_produk" id="kode_produk" value="{{ old('kode_produk') }}" class="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-gaming-blue" required>
                    </div>
                    <div>
                        <label class="block text-white mb-2" for="nama">Nama</label>
                        <input type="text" name="nama" id="nama" value="{{ old('nama') }}" class="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-gaming-blue" required>
                    </div>
                    <div class="md:col-span-2">
                        <label class="block text-white mb-2" for="deskripsi">Deskripsi</label>
                        <textarea name="deskripsi" id="deskripsi" class="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-gaming-blue" rows="4">{{ old('deskripsi') }}</textarea>
                    </div>
                    <div>
                        <label class="block text-white mb-2" for="harga">Harga</label>
                        <input type="number" name="harga" id="harga" value="{{ old('harga') }}" class="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-gaming-blue" required step="0.01">
                    </div>
                    <div>
                        <label class="block text-white mb-2" for="stok">Stok</label>
                        <input type="number" name="stok" id="stok" value="{{ old('stok') }}" class="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-gaming-blue" required>
                    </div>
                    <div>
                        <label class="block text-white mb-2" for="kategori_id">Kategori</label>
                        <select name="kategori_id" id="kategori_id" class="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-gaming-blue" required>
                            <option value="">Pilih Kategori</option>
                            @foreach($kategoris as $kategori)
                                <option value="{{ $kategori->id }}">{{ $kategori->nama }}</option>
                            @endforeach
                        </select>
                    </div>
                    <div>
                        <label class="block text-white mb-2" for="platform">Platform</label>
                        <input type="text" name="platform" id="platform" value="{{ old('platform') }}" class="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-gaming-blue" required>
                    </div>
                    <div class="md:col-span-2">
                        <label class="block text-white mb-2" for="gambar">Gambar</label>
                        <input type="file" name="gambar" id="gambar" class="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700">
                    </div>
                    <div class="md:col-span-2">
                        <label class="block text-white mb-2" for="zip_file">File ZIP</label>
                        <input type="file" name="zip_file" id="zip_file" class="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700">
                    </div>
                </div>
                <div class="mt-6 text-center">
                    <a href="{{ route('user.produk.index') }}" class="px-6 py-3 btn-gaming text-white rounded-lg hover-lift mr-6">
                        <i class="fas fa-arrow-left mr-2"></i> Kembali
                    </a>
                    <button type="submit" class="px-6 py-3 bg-gaming-blue text-white rounded-lg hover:bg-gaming-red-600 hover-lift transition-colors">
                        Tambah Produk
                    </button>
                </div>
            </form>
        </div>
    </section>
</body>
</html>
@include('user.footer')