<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="csrf-token" content="{{ csrf_token() }}">
  <title>GameX - Library Kamu</title>
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
<body class="gaming-darker text-white min-h-screen">
  @include('user.navbar')

  <main class="py-12">
    <div class="max-w-6xl mx-auto px-4">
      <h1 class="text-3xl font-bold mb-6">🎮 Library Game Kamu</h1>

      @if($transaksis->isEmpty())
        <p class="text-gray-400">Kamu belum memiliki game untuk dimainkan atau didownload.</p>
      @else
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          @foreach($transaksis as $item)
            <div class="gaming-card rounded-lg overflow-hidden shadow-lg flex flex-col">
              {{-- Cover + overlay --}}
              <div class="relative h-48 bg-black">
                @if($item->gambar)
                  <img src="{{ asset('storage/' . $item->gambar) }}"
                       alt="{{ $item->nama_produk }}"
                       class="w-full h-full object-cover">
                @else
                  <div class="w-full h-full bg-gray-700 flex items-center justify-center">
                    <span class="text-gray-400">No Image</span>
                  </div>
                @endif

                {{-- Judul game --}}
                <div class="absolute top-0 left-0 right-0 bg-gradient-to-b from-black/75 to-transparent p-2">
                  <h2 class="text-lg font-bold">{{ $item->nama_produk }}</h2>
                </div>

                {{-- Statistik waktu main --}}
                <div class="absolute bottom-0 left-0 right-0 bg-black/50 p-2 text-sm">
                  <div class="flex items-center space-x-2">
                    <i class="fas fa-play text-green-400"></i>
                    <div>
                      <div>Last two weeks: 0 min</div>
                      <div>Total: 0 min</div>
                    </div>
                  </div>
                </div>
              </div>

              {{-- Aksi --}}
              <div class="p-4 mt-auto space-y-2">
                <a href="{{ route('user.library.play', $item->id) }}"
                   class="block text-center px-4 py-2 bg-blue-600 rounded hover:bg-blue-500 transition">
                  Mainkan
                </a>
                <a href="{{ route('user.library.download', $item->id) }}"
                   class="block text-center px-4 py-2 bg-green-600 rounded hover:bg-green-500 transition">
                  Download
                </a>
                <form action="{{ route('user.library.delete', $item->id) }}"
                      method="POST"
                      onsubmit="return confirm('Yakin ingin menghapus game ini dari library?');">
                  @csrf
                  @method('DELETE')
                  <button type="submit"
                          class="w-full px-4 py-2 bg-red-600 rounded hover:bg-red-500 transition">
                    Delete
                  </button>
                </form>
              </div>
            </div>
          @endforeach
        </div>
      @endif
    </div>
  </main>

  @include('user.footer')
</body>
</html>
