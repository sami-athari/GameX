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
</head>
<body class="gaming-darker text-white min-h-screen">

  <!-- Navbar -->
  @include('user.navbar')

  <!-- Main Content -->
  <main class="py-12">
    <div class="max-w-6xl mx-auto px-4">
      <h1 class="text-3xl font-bold mb-6">🎮 Library Game Kamu</h1>

      @if($transaksis->isEmpty())
        <p class="text-gray-400">Kamu belum memiliki game yang dapat dimainkan atau didownload.</p>
      @else
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          @foreach($transaksis as $item)
            <div class="bg-gaming-card rounded-lg shadow-lg overflow-hidden">
              <div class="p-6 flex flex-col space-y-4">
                <h2 class="text-xl font-semibold">{{ $item->produk->nama }}</h2>
                <div class="flex space-x-2">
                  <a href="{{ route('user.library.play', $item->id) }}"
                     class="flex-1 text-center px-3 py-2 bg-blue-600 rounded hover:bg-blue-500 transition">
                    Mainkan
                  </a>
                  <a href="{{ route('user.library.download', $item->id) }}"
                     class="flex-1 text-center px-3 py-2 bg-green-600 rounded hover:bg-green-500 transition">
                    Download
                  </a>
                  <form action="{{ route('user.library.delete', $item->id) }}" method="POST"
                        onsubmit="return confirm('Yakin ingin menghapus game ini dari library?');"
                        class="flex-1">
                    @csrf
                    @method('DELETE')
                    <button type="submit"
                            class="w-full px-3 py-2 bg-red-600 rounded hover:bg-red-500 transition">
                      Delete
                    </button>
                  </form>
                </div>
              </div>
            </div>
          @endforeach
        </div>
      @endif
    </div>
  </main>



</body>
</html>
