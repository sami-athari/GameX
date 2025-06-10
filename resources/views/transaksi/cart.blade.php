<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="csrf-token" content="{{ csrf_token() }}">
  <title>GameX - Data Keranjang</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <style>
    .gaming-dark { background-color: #2d3748; }
    .gaming-darker { background-color: #1a202c; }
    .gaming-card { background-color: #4a5568; }
    .gaming-hover:hover { background-color: #2a4365; }
  </style>
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
          fontFamily: { sans: ['Figtree','sans-serif'] },
        }
      }
    }
  </script>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"/>
</head>
<body class="bg-gaming-darker text-white font-sans">
</head>
<body class="gaming-darker text-white min-h-screen py-12">
  <div class="max-w-5xl mx-auto px-4">
<!-- Navigation -->
     @include('user.navbar')
    <!-- Header -->
    <div class="flex justify-between items-center mb-6">
      <h1 class="text-4xl font-bold">Data Keranjang</h1>
      <div class="space-x-4">

      </div>
    </div>

    <!-- Session success -->
    @if(session('success'))
      <div class="mb-4 p-4 bg-green-600 rounded-lg shadow">
        {{ session('success') }}
      </div>
    @endif

    <!-- Table -->
    <div class="overflow-x-auto">
     <!-- resources/views/transaksi/cart.blade.php -->
<table class="min-w-full table-auto border-collapse shadow-lg rounded">
  <thead>
    <tr class="bg-gaming-dark text-white">
      <th class="px-4 py-3 text-left">Gambar Produk</th>
      <th class="px-4 py-3 text-left">Nama Produk</th>
      <th class="px-4 py-3 text-left">Harga</th>
      <th class="px-4 py-3 text-left">Status</th>
      <th class="px-4 py-3 text-left">Tanggal</th>
      <th class="px-4 py-3 text-center">Aksi</th>
    </tr>
  </thead>
  <tbody class="divide-y divide-gray-700">
    @foreach($carts as $cart)
      <tr class="bg-gaming-card hover:gaming-hover transition duration-200">
        <!-- Ganti kode_produk jadi gambar -->
        <td class="px-4 py-3">
          <img src="{{ asset('storage/'.$cart->gambar) }}"
               alt="{{ $cart->nama_produk }}"
               class="w-16 h-16 object-cover rounded"/>
        </td>

        <!-- Ganti nama_user jadi nama_produk -->
        <td class="px-4 py-3 font-semibold">
          {{ $cart->nama_produk }}
        </td>

        <td class="px-4 py-3">Rp {{ number_format($cart->harga, 0, ',', '.') }}</td>

        <td class="px-4 py-3">
          <span class="font-semibold" style="color:
            {{ $cart->status=='Selesai' ? '#48BB78'
               : ($cart->status=='Pending' ? '#F56565' : '#E2E8F0') }};
          ">
            {{ $cart->status }}
          </span>
        </td>

        <td class="px-4 py-3">{{ $cart->created_at->format('d M Y, H:i') }}</td>

        <td class="px-4 py-3 text-center space-y-1">
          @if($cart->status == 'Pending')
            <form action="{{ route('transaksi.bayar') }}" method="POST" class="inline-block mb-1">
              @csrf
              <input type="hidden" name="cart_id" value="{{ $cart->id }}">
              <button type="submit" class="px-3 py-1 bg-green-600 rounded hover:bg-green-500 transition">
                Bayar
              </button>
            </form>
            <form action="{{ route('transaksi.clearcart', $cart->id) }}" method="POST" class="inline-block mb-1">
              @csrf
              <button type="submit" class="px-3 py-1 bg-red-600 rounded hover:bg-red-500 transition">
                Batal
              </button>
            </form>
          @elseif($cart->status == 'Selesai')
            <a href="{{ route('transaksi.cetak', $cart->id) }}" target="_blank"
               class="px-3 py-1 bg-blue-600 rounded hover:bg-blue-500 transition block mb-1">
              Cetak PDF
            </a>
          @endif

        </td>
      </tr>
    @endforeach
  </tbody>
</table>

    </div>
  </div>
  <section class="min-h-screen pt-20">
  @include('user.footer')
</body>
</html>

