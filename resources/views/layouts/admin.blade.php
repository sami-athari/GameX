@extends('admin.layout')

@section('title', 'Welcome')

@section('content')
<div class="pt-16">
    <div class="text-center w-full">
        <div class="flex items-center justify-center mb-6">
            <span class="bg-gaming-red-600 rounded-full p-3 mr-2">
                <i class="fas fa-shield-alt text-white"></i>
            </span>
            <h1 class="text-5xl font-extrabold text-gray-200">Game<span class="text-gaming-red-600">X</span> Admin</h1>
        </div>
        <p class="text-lg mb-6 max-w-lg mx-auto text-gray-400">
            Selamat datang, {{ Auth::user()->name }}! Kelola marketplace futuristik ini dan pantau aktivitas gamer dari seluruh galaksi.
        </p>
        <div class="mb-8">
            <div class="flex items-center justify-center space-x-4">
                <div class="relative w-full max-w-md">
                    <input type="text" id="searchInput" placeholder="Cari pengguna, produk, atau pesanan..." class="w-full px-6 py-3 search-bar text-white placeholder-gray-500 focus:outline-none">
                    <button onclick="searchAdmin()" class="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-300 hover:text-gaming-blue">
                        <i class="fas fa-search"></i>
                    </button>
                </div>
            </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <div class="glass p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover-lift">
                <i class="fas fa-box-open text-3xl text-gaming-blue mb-2"></i>
                <h3 class="text-lg font-semibold text-gray-300 mb-2">Total Produk</h3>
                <p class="text-3xl font-bold">{{ $produks->count() }}</p>
                <p class="text-sm text-gray-500 mt-2">Jumlah produk yang dikelola</p>
            </div>
            <div class="glass p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover-lift">
                <i class="fas fa-shopping-cart text-3xl text-gaming-red-600 mb-2"></i>
                <h3 class="text-lg font-semibold text-gray-300 mb-2">Produk Aktif</h3>
                <p class="text-3xl font-bold">{{ $produks->where('stok', '>', 0)->count() }}</p>
                <p class="text-sm text-gray-500 mt-2">Produk dengan stok tersedia</p>
            </div>
            <div class="glass p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover-lift">
                <i class="fas fa-dollar-sign text-3xl text-yellow-500 mb-2"></i>
                <h3 class="text-lg font-semibold text-gray-300 mb-2">Total Nilai Produk</h3>
                <p class="text-3xl font-bold">Rp {{ number_format($produks->sum('harga'), 0, ',', '.') }}</p>
                <p class="text-sm text-gray-500 mt-2">Total harga semua produk</p>
            </div>
        </div>
        <div class="space-x-4">
            <a href="{{ route('logout') }}" class="logout-btn">Logout</a>
        </div>
    </div>

    <script>
        function searchAdmin() {
            let input = document.getElementById('searchInput').value.toLowerCase();
            console.log("Searching for: ", input);
            if (input) window.location.href = `{{ url('/admin/search') }}?q=${encodeURIComponent(input)}`;
        }
    </script>
@endsection
