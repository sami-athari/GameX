<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Products - GameX</title>
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
        <div class="max-w-8xl mx-auto px-6">
            <div class="flex justify-between items-center mb-8">
                <h1 class="text-4xl font-extrabold text-white">My Products</h1>
                <a href="{{ route('user.produk.create') }}" class="px-6 py-3 bg-gaming-blue text-white rounded-lg hover:bg-gaming-red-600 hover-lift transition-colors">
                    <i class="fas fa-plus mr-2"></i> Create Product
                </a>
            </div>

            @if(session('success'))
                <div class="bg-gaming-blue text-white p-4 rounded-lg mb-6 flex items-center hover-lift">
                    <i class="fas fa-check-circle mr-2"></i> {{ session('success') }}
                </div>
            @endif

            @if(session('error'))
                <div class="bg-gaming-red-600 text-white p-4 rounded-lg mb-6 flex items-center hover-lift">
                    <i class="fas fa-exclamation-circle mr-2"></i> {{ session('error') }}
                </div>
            @endif

            <div class="bg-gaming-card rounded-xl overflow-hidden shadow-lg">
                <div class="overflow-x-auto">
                    <table class="min-w-full divide-y divide-gray-900 w-full">
                        <thead>
                            <tr class="bg-gaming-darker text-left text-gray-300 uppercase text-xs">
                                <th class="px-4 py-3">ID</th>
                                <th class="px-4 py-3">Kode Produk</th>
                                <th class="px-4 py-3">Nama</th>
                                <th class="px-4 py-3">Deskripsi</th>
                                <th class="px-4 py-3">Harga</th>
                                <th class="px-4 py-3">Stok</th>
                                <th class="px-4 py-3">Kategori</th>
                                <th class="px-4 py-3">Platform</th>
                                <th class="px-4 py-3">Gambar</th>
                                <th class="px-4 py-3">File ZIP</th>
                                <th class="px-4 py-3">Aksi</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-gray-700">
                            @forelse($produks as $produk)
                                <tr class="hover:bg-gaming-hover">
                                    <td class="px-4 py-2 text-white">{{ $produk->id }}</td>
                                    <td class="px-4 py-2 text-white">{{ $produk->kode_produk }}</td>
                                    <td class="px-4 py-2 text-white">{{ $produk->nama }}</td>
                                    <td class="px-4 py-2 text-white">{{ Str::limit($produk->deskripsi, 50) }}</td>
                                    <td class="px-4 py-2 text-white">Rp {{ number_format($produk->harga, 0, ',', '.') }}</td>
                                    <td class="px-4 py-2 text-white">{{ $produk->stok }}</td>
                                    <td class="px-4 py-2 text-white">{{ $produk->kategori->nama ?? 'N/A' }}</td>
                                    <td class="px-4 py-2 text-white">{{ $produk->platform }}</td>
                                    <td class="px-4 py-2">
                                        @if($produk->gambar)
                                            <img src="{{ asset('storage/' . $produk->gambar) }}" alt="{{ $produk->nama }}" class="w-16 h-16 object-cover rounded">
                                        @else
                                            <span class="text-gray-400">No Image</span>
                                        @endif
                                    </td>
                                    <td class="px-4 py-2">
                                        @if($produk->zip_file)
                                            <a href="{{ asset('storage/' . $produk->zip_file) }}" class="text-gaming-red-600 hover:text-gaming-red-500">Download</a>
                                        @else
                                            <span class="text-gray-400">No File</span>
                                        @endif
                                    </td>
                                    <td class="px-4 py-2 text-center space-x-1">
                                        <div class="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-2">
                                            <a href="{{ route('user.produk.edit', $produk->id) }}"
                                               class="bg-yellow-600 hover:bg-yellow-700 text-white px-2 py-1 rounded text-xs sm:text-sm hover-lift w-full sm:w-auto">
                                                <i class="fas fa-edit mr-1"></i> Edit
                                            </a>
                                            <form action="{{ route('user.produk.destroy', $produk->id) }}" method="POST" class="inline-block w-full sm:w-auto"
                                                  onsubmit="return confirm('Yakin ingin menghapus produk ini?');">
                                                @csrf
                                                @method('DELETE')
                                                <button type="submit"
                                                        class="bg-gaming-red-600 hover:bg-gaming-red-500 text-white px-2 py-1 rounded text-xs sm:text-sm hover-lift w-full">
                                                    <i class="fas fa-trash-alt mr-1"></i> Delete
                                                </button>
                                            </form>
                                        </div>
                                    </td>
                                </tr>
                            @empty
                                <tr>
                                    <td colspan="11" class="px-4 py-2 text-center text-gray-400">No products found.</td>
                                </tr>
                            @endforelse
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </section>
</body>
</html>
@include('user.footer')