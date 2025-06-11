@extends('admin.layout')

@section('title', 'Welcome')

@section('content')
<div class="pt-16">
    <div class="text-center w-full">
        <div class="flex items-center justify-center mb-8">

            <h1 class="text-6xl font-extrabold text-gray-200 leading-tight">
                Game<span class="text-gaming-red-600">X</span> Admin
            </h1>
        </div>
        <p class="text-xl mb-8 max-w-xl mx-auto text-gray-400 font-medium">
            Selamat datang, {{ Auth::user()->name }}! Silahkan kelola marketplace GameX dan pantau aktivitas gamer dari dalam website.
        </p>
        <div class="mb-10">
            <div class="flex items-center justify-center space-x-4">
                <!-- Tambahkan tombol atau elemen interaktif jika diperlukan -->
            </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            <div class="glass p-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover-lift">
                <i class="fas fa-box-open text-2xl text-gaming-blue mb-2"></i>
                <h3 class="text-base font-semibold text-gray-300 mb-1">Total Produk</h3>
                <p class="text-2xl font-bold">{{ $produks->count() }}</p>
                <p class="text-xs text-gray-500 mt-1">Jumlah produk yang dikelola</p>
            </div>
            <div class="glass p-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover-lift">
                <i class="fas fa-shopping-cart text-2xl text-gaming-red-600 mb-2"></i>
                <h3 class="text-base font-semibold text-gray-300 mb-1">Produk Aktif</h3>
                <p class="text-2xl font-bold">{{ $produks->where('stok', '>', 0)->count() }}</p>
                <p class="text-xs text-gray-500 mt-1">Produk dengan stok tersedia</p>
            </div>
            <div class="glass p-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover-lift">
                <i class="fas fa-dollar-sign text-2xl text-yellow-500 mb-2"></i>
                <h3 class="text-base font-semibold text-gray-300 mb-1">Total Nilai Produk</h3>
                <p class="text-2xl font-bold">Rp {{ number_format($produks->sum('harga'), 0, ',', '.') }}</p>
                <p class="text-xs text-gray-500 mt-1">Total harga semua produk</p>
            </div>
        </div>
        <div class="space-x-4">
            <a href="{{ route('logout') }}" class="btn-gaming-red px-6 py-2 rounded-lg hover-lift">Logout</a>
        </div>
    </div>

    <script>
        function searchAdmin() {
            let input = document.getElementById('searchInput')?.value.toLowerCase();
            console.log("Searching for: ", input);
            if (input) window.location.href = `{{ url('/admin/search') }}?q=${encodeURIComponent(input)}`;
        }
    </script>
@endsection
