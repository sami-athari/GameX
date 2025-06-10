<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="csrf-token" content="{{ csrf_token() }}">
  <title>GameX - Data Transaksi</title>
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
<body class="bg-gaming-darker text-white font-sans min-h-screen">
  @include('user.navbar')

  <main class="max-w-5xl mx-auto px-4 py-8">
    <div class="bg-gaming-card rounded-lg shadow-lg overflow-hidden">
      <div class="bg-gaming-dark px-6 py-4 flex justify-between items-center">
        <h2 class="text-2xl font-bold">Data Transaksi</h2>
      </div>
      <div class="p-6">
        @if(session('success'))
          <div class="mb-6 p-4 bg-green-600 rounded shadow">
            {{ session('success') }}
          </div>
        @endif

        <div class="overflow-x-auto">
          <table class="min-w-full table-auto border-collapse">
            <thead>
              <tr class="bg-gaming-dark">
                <th class="px-4 py-3 text-left">Gambar</th>
                <th class="px-4 py-3 text-left">Nama Produk</th>
                <th class="px-4 py-3 text-left">Harga</th>
                <th class="px-4 py-3 text-left">Status</th>
                <th class="px-4 py-3 text-left">Tanggal</th>
                <th class="px-4 py-3 text-center">Aksi</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-700">
              @forelse($transaksis as $transaksi)
                <tr class="hover:bg-gaming-hover transition">
                  {{-- Gambar --}}
                  <td class="px-4 py-3">
                    @if($transaksi->gambar)
                      <img src="{{ asset('storage/' . $transaksi->gambar) }}"
                           alt="{{ $transaksi->nama_produk }}"
                           class="w-16 h-16 object-cover rounded">
                    @else
                      <span class="text-gray-400">No Image</span>
                    @endif
                  </td>

                  {{-- Nama Produk --}}
                  <td class="px-4 py-3">{{ $transaksi->nama_produk }}</td>

                  {{-- Harga --}}
                  <td class="px-4 py-3">Rp {{ number_format($transaksi->harga, 0, ',', '.') }}</td>

                  {{-- Status --}}
                  <td class="px-4 py-3">
                    @php $st = strtolower($transaksi->status); @endphp
                    <span class="font-semibold"
                          style="color: {{ $st === 'selesai' ? '#48BB78' : '#F56565' }};">
                      {{ ucfirst($st) }}
                    </span>
                  </td>

                  {{-- Tanggal --}}
                  <td class="px-4 py-3">
                    {{ $transaksi->created_at->format('d M Y, H:i') }}
                  </td>

                  {{-- Aksi --}}
                  <td class="px-4 py-3 text-center space-x-2">
                    @if($st === 'pending')
                      <form action="{{ route('transaksi.batal', $transaksi->id) }}"
                            method="POST"
                            class="inline">
                        @csrf
                        <button type="submit"
                                class="px-3 py-1 bg-red-600 rounded hover:bg-red-500 transition">
                          Batal
                        </button>
                      </form>
                    @elseif($st === 'selesai')
                      <a href="{{ route('transaksi.cetak', $transaksi->id) }}"
                         target="_blank"
                         class="px-3 py-1 bg-blue-600 rounded hover:bg-blue-500 transition">
                        Cetak PDF
                      </a>
                    @endif
                  </td>
                </tr>
              @empty
                <tr>
                  <td colspan="6"
                      class="px-4 py-6 text-center text-gray-400">
                    Belum ada transaksi.
                  </td>
                </tr>
              @endforelse
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </main>

  @include('user.footer')
</body>
</html>
