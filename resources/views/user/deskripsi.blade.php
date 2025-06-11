<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="csrf-token" content="{{ csrf_token() }}">
  <title>{{ $produk->nama }} — GameX</title>

  <!-- Tailwind & FontAwesome -->
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      theme: {
        extend: {
          colors: {
            'gaming-dark': '#2d3748',
            'gaming-darker': '#1a202c',
            'gaming-purple': '#9f7aea',
            'gaming-blue': '#4299e1',
            'gaming-card': '#4a5568',
          },
          fontFamily: { sans: ['Figtree', 'sans-serif'] },
        }
      }
    }
  </script>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"/>
</head>
<body class="bg-gaming-darker text-white font-sans">

<!-- Navigation -->
@include('user.navbar')

<!-- Main Container -->
<div class="max-w-screen-2xl mx-auto px-6 py-10 space-y-12">

  <!-- Judul Game -->
  <h1 class="text-5xl font-bold">{{ $produk->nama }}</h1>

  <!-- Two-column Layout -->
  <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">

    <!-- Left: Gambar (diperbesar 2x tinggi) -->
    <div class="lg:col-span-2">
      <img src="{{ asset('storage/' . $produk->gambar) }}"
           alt="{{ $produk->nama }}"
           class="w-full h-[44rem] object-cover rounded-lg shadow-lg"/>
    </div>

    <!-- Right: Sidebar Info -->
    <div class="space-y-6">

      <!-- Harga Besar (menggantikan “Out of Words” logo) -->
      <div class="text-center">
        <span class="text-5xl font-extrabold text-red-600">
          Rp {{ number_format($produk->harga, 0, ',', '.') }}
        </span>
      </div>

      <!-- Tombol Add to Wishlist -->
      <form action="{{ route('transaksi.cart') }}" method="GET">
        <input type="hidden" name="produk_id" value="{{ $produk->id }}">
        <button type="submit"
                class="w-full bg-red-600 hover:bg-red-700 transition py-3 rounded-lg text-white font-semibold">
          Add to Wishlist
        </button>
      </form>

      <!-- Metadata List -->
      <dl class="space-y-4 text-gray-300">
        <div class="flex justify-between">
          <dt class="font-medium">Deskripsi</dt>
          <dd class="text-right">{{ $produk->deskripsi ?? '–' }}</dd>
        </div>
        <div class="flex justify-between">
          <dt class="font-medium">Stok</dt>
          <dd class="text-right">{{ $produk->stok }}</dd>
        </div>
        <div class="flex justify-between">
          <dt class="font-medium">Platform</dt>
          <dd class="text-right">{{ $produk->platform ?? '–' }}</dd>
        </div>
      </dl>

    </div>
  </div>
</div>

@include('user.footer')
</body>
</html>
