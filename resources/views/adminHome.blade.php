@extends('admin.layout')

@section('title', 'Dashboard')

@section('content')
    @if(session('success'))
        <div class="bg-green-600 text-white p-4 rounded-lg mb-6 flex items-center hover-lift">
            <i class="fas fa-check-circle mr-2"></i>
            {{ session('success') }}
        </div>
    @endif
    @if(session('error'))
        <div class="bg-gaming-red-600 text-white p-4 rounded-lg mb-6 flex items-center hover-lift">
            <i class="fas fa-exclamation-circle mr-2"></i>
            {{ session('error') }}
        </div>
    @endif
    <div class="pt-20">
        <div class="bg-gaming-card rounded-lg overflow-hidden shadow-lg">
            <div class="overflow-x-auto">
                <table class="min-w-full divide-y divide-gray-700 w-full">
                    <thead>
                        <tr class="bg-gaming-dark text-left text-gray-300 uppercase text-xs">
                            <th class="px-4 py-3 min-w-[50px]">ID</th>
                            <th class="px-4 py-3 min-w-[100px]">Kode Produk</th>
                            <th class="px-4 py-3 min-w-[120px]">Nama</th>
                            <th class="px-4 py-3 min-w-[150px] hidden md:table-cell">Deskripsi</th>
                            <th class="px-4 py-3 min-w-[100px]">Harga</th>
                            <th class="px-4 py-3 min-w-[80px]">Stok</th>
                            <th class="px-4 py-3 min-w-[100px]">Kategori</th>
                            <th class="px-4 py-3 min-w-[100px]">Platform</th>
                            <th class="px-4 py-3 min-w-[100px] hidden md:table-cell">Gambar</th>
                            <th class="px-4 py-3 min-w-[100px] hidden md:table-cell">File ZIP</th>
                            <th class="px-4 py-3 min-w-[120px]">Aksi</th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-gray-700">
                        @forelse($produks as $produk)
                            <tr class="hover:bg-gaming-hover">
                                <td class="px-4 py-2">{{ $produk->id }}</td>
                                <td class="px-4 py-2">{{ $produk->kode_produk }}</td>
                                <td class="px-4 py-2">{{ $produk->nama }}</td>
                                <td class="px-4 py-2 hidden md:table-cell">{{ Str::limit($produk->deskripsi, 50) }}</td>
                                <td class="px-4 py-2">{{ number_format($produk->harga, 0, ',', '.') }}</td>
                                <td class="px-4 py-2">{{ $produk->stok }}</td>
                                <td class="px-4 py-2">{{ $produk->kategori->nama ?? 'N/A' }}</td>
                                <td class="px-4 py-2">{{ $produk->platform }}</td>
                                <td class="px-4 py-2 hidden md:table-cell">
    @if($produk->gambar)
        <img src="{{ asset('storage/' . $produk->gambar) }}" alt="{{ $produk->nama }}" class="w-16 h-16 object-cover rounded">
    @else
        <span class="text-gray-400">No Image</span>
    @endif
</td>
                                <td class="px-4 py-2 hidden md:table-cell">
                                    @if($produk->zip_file)
                                        <a href="{{ asset($produk->zip_file) }}" class="text-gaming-red-600 hover:text-gaming-red-500">Download</a>
                                    @else
                                        <span class="text-gray-400">No File</span>
                                    @endif
                                </td>
                                <td class="px-4 py-2 text-center space-x-1">
                                    <div class="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-2">
                                        <a href="{{ route('admin.play', $produk->id) }}"
                                           class="bg-green-600 hover:bg-green-700 text-white px-2 py-1 rounded text-xs sm:text-sm hover-lift w-full sm:w-auto">
                                            <i class="fas fa-play mr-1"></i> Mainkan
                                        </a>
                                        <a href="{{ route('produk.edit', $produk->id) }}"
                                           class="bg-yellow-600 hover:bg-yellow-700 text-white px-2 py-1 rounded text-xs sm:text-sm hover-lift w-full sm:w-auto">
                                            <i class="fas fa-edit mr-1"></i> Edit
                                        </a>
                                        <form action="{{ route('produk.destroy', $produk->id) }}" method="POST" class="inline-block w-full sm:w-auto"
                                              onsubmit="return confirm('Yakin ingin menghapus produk ini?');">
                                            @csrf
                                            @method('DELETE')
                                            <button type="submit"
                                                    class="bg-gaming-red-600 hover:bg-gaming-red-500 text-white px-2 py-1 rounded text-xs sm:text-sm hover-lift w-full">
                                                <i class="fas fa-trash-alt mr-1"></i> Hapus
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
@endsection
