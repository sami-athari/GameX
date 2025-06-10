<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <meta name="csrf-token" content="{{ csrf_token() }}">
  <title>GameX</title>

  <!-- Fonts & Icons -->
  <link rel="preconnect" href="https://fonts.bunny.net">
  <link href="https://fonts.bunny.net/css?family=figtree:400,600,800&display=swap" rel="stylesheet"/>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"/>

  <!-- Tailwind CSS -->
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

  <style>
    .glass { backdrop-filter: blur(8px); background: rgba(26,32,44,0.7); }
    .hover-lift { transition: transform .3s ease; }
    .hover-lift:hover { transform: translateY(-4px); }

    .carousel-container { position: relative; }
    .carousel {
      display: flex;
      overflow-x: hidden;
      scroll-behavior: smooth;
    }
    .carousel-button {
      position: absolute;
      top: 50%; transform: translateY(-50%);
      background-color: rgba(0,0,0,0.5);
      border: none; color: white; padding: 0.5rem;
      cursor: pointer; z-index: 10; transition: background-color .3s ease;
      border-radius: 9999px;
    }
    .carousel-button:hover { background-color: rgba(0,0,0,0.7); }
    .carousel-button.left { left: 10px; }
    .carousel-button.right { right: 10px; }

    .card-hover-overlay::before {
      content: "";
      position: absolute; inset: 0;
      background: rgba(255,255,255,0.1);
      opacity: 0; transition: opacity 0.3s ease;
      z-index: 10; border-radius: 0.75rem;
    }
    .card-hover-overlay:hover::before { opacity: 1; }

    .plus-button {
      position: absolute; top: 8px; right: 8px;
      background-color: rgba(180, 21, 21, 0.8);
      border-radius: 9999px; padding: 6px;
      cursor: pointer; transition: background-color .3s ease, transform .3s ease;
      z-index: 20; opacity: 0;
    }
    .card-hover-overlay:hover .plus-button { opacity: 1; }
    .plus-button:hover {
      background-color: rgba(255,255,255,0.4);
      transform: scale(1.1);
    }

    /* Expanded view CSS */
    #games-section.expanded .carousel-container {
      overflow: visible !important;
    }
    #games-section.expanded #carousel {
      display: flex !important;
      flex-wrap: wrap !important;
      justify-content: flex-start !important;
      gap: 1.5rem !important;
      padding-left: 0 !important;
    }
    #games-section.expanded #carousel > div {
      width: 250px !important;
      margin: 0 !important;
    }
  </style>
</head>

<body class="bg-gaming-darker text-white font-sans">
  <!-- Navigation -->
     @include('user.navbar')


  <!-- Hero Interaktif -->
<section class="min-h-screen pt-20">
  <div class="max-w-screen-2xl mx-auto px-6 flex items-center">
    <div class="w-full grid grid-cols-1 lg:grid-cols-3 gap-8">
      <!-- Left: Hero Card -->
      <div class="lg:col-span-2 relative bg-black rounded-2xl overflow-hidden shadow-2xl">
        <img
          id="hero-gambar"
          src="{{ Storage::url($produks[0]->gambar) }}"
          alt="{{ $produks[0]->nama }}"
          class="w-full h-[70vh] object-cover"
        />
        <div class="absolute inset-0 bg-gradient-to-b from-transparent to-black/80"></div>
        <div class="absolute bottom-8 left-8 space-y-4">
          <h2 id="hero-title" class="text-4xl md:text-5xl font-extrabold">
            {{ $produks[0]->nama }}
          </h2>
          <div class="flex items-center space-x-4">
            <span class="px-3 py-1 bg-red-600 text-sm rounded">
              {{ $produks[0]->discount_label }}
            </span>
            @if($produks[0]->orig_price)
              <span class="text-gray-400 line-through">
                IDR {{ number_format($produks[0]->orig_price, 0, ',', '.') }}
              </span>
            @endif
            <span id="hero-price" class="text-2xl font-bold">
              {{ $produks[0]->harga == 0
                  ? 'FREE'
                  : 'Rp '.number_format($produks[0]->harga, 0, ',', '.')
              }}
            </span>
          </div>
          <div class="flex items-center space-x-4 mt-4">
            <!-- Learn More → langsung ke deskripsi produk -->
            <button
              onclick="window.location.href='{{ route('deskripsi', $produks[0]->id) }}'"
              class="px-6 py-3 bg-white text-black rounded-lg hover-lift"
            >
              Learn More
            </button>
            <!-- Add to Wishlist → langsung ke beli -->
           <form action="{{ route('transaksi.beli') }}" method="POST">
    @csrf
    <input type="hidden" name="produk_id" value="{{ $produks[0]->id }}">
    <button type="submit" class="px-4 py-3 border border-white rounded-lg hover:bg-white hover:text-black transition">
        Add to Wishlist
    </button>
</form>

          </div>
        </div>
      </div>

      <!-- Right: Sidebar Thumbnails (tidak berubah) -->
      <div class="space-y-4 flex flex-col items-center">
        @foreach($produks->take(4) as $idx => $p)
          <div
            class="w-24 h-32 rounded-lg overflow-hidden cursor-pointer border-2 border-transparent hover:border-red-600 transition"
            data-index="{{ $idx }}"
            data-title="{{ $p->nama }}"
            data-desc="{{ $p->description }}"
            data-img="{{ Storage::url($p->gambar) }}"
            data-sale-price="{{ $p->harga }}"
            data-discount="{{ $p->discount_label }}"
          >
            <img
              src="{{ Storage::url($p->gambar) }}"
              alt="{{ $p->nama }}"
              class="w-full h-full object-cover"
            />
          </div>
        @endforeach
      </div>
    </div>
  </div>
</section>


  <!-- Games Carousel -->
  <section id="games-section" class="py-12">
    <div class="max-w-screen-2xl mx-auto px-6">
      <div class="flex justify-between items-center mb-6">
        <h2 class="text-3xl font-bold">Popular Games</h2>
        <div class="flex space-x-2">
          <button class="carousel-button left" id="carousel-left"><i class="fas fa-chevron-left"></i></button>
          <button class="carousel-button right" id="carousel-right"><i class="fas fa-chevron-right"></i></button>
          <button id="toggle-view" class="text-sm font-medium text-gaming-purple hover:underline">View More</button>
        </div>
      </div>

      @if($produks->isNotEmpty())
        <div class="carousel-container overflow-x-auto" id="carousel-container">
          <div class="carousel space-x-6 flex-shrink-0 flex" id="carousel">
            @foreach($produks as $produk)
              <div class="relative min-w-[250px] bg-gaming-card rounded-xl overflow-hidden card-hover-overlay group flex-shrink-0 cursor-pointer"
                   onclick="window.location.href='{{ route('deskripsi', $produk->id) }}'">
                @if($produk->stok > 0)
                  <form action="{{ route('transaksi.beli') }}" method="POST"
                        onclick="event.stopPropagation();" class="absolute top-2 right-2 z-10">
                    @csrf
                    <input type="hidden" name="produk_id" value="{{ $produk->id }}">
                    <button type="submit" class="plus-button"><i class="fas fa-plus text-white"></i></button>
                  </form>
                @endif
                <div class="h-40 bg-gaming-darker overflow-hidden">
                  @if($produk->gambar)
                    <img src="{{ asset('storage/'.$produk->gambar) }}" alt="" class="w-full h-full object-cover"/>
                  @else
                    <div class="w-full h-full flex items-center justify-center bg-gradient-to-br from-gaming-purple to-gaming-blue">
                      <i class="fas fa-gamepad text-4xl text-white opacity-50"></i>
                    </div>
                  @endif
                </div>
                <div class="p-4">
                  <h3 class="text-lg font-semibold truncate">{{ $produk->nama }}</h3>
                  <p class="text-sm text-gray-400 mt-1">Rp {{ number_format($produk->harga,0,',','.') }}</p>
                </div>
              </div>
            @endforeach
          </div>
        </div>
      @else
        <div class="text-center py-16">
          <i class="fas fa-gamepad text-6xl text-gaming-purple opacity-50 mb-4"></i>
          <h3 class="text-2xl font-bold mb-2">No Games Available</h3>
          <p class="text-gray-400">Check back later!</p>
        </div>
      @endif
    </div>

    <script>
  document.addEventListener('DOMContentLoaded', () => {
    const carousel      = document.getElementById('carousel');
    const leftBtn       = document.getElementById('carousel-left');
    const rightBtn      = document.getElementById('carousel-right');
    const toggleBtn     = document.getElementById('toggle-view');
    const gamesSection  = document.getElementById('games-section');

    // fungsi update tombol carousel
    function updateButtons() {
      leftBtn.classList.toggle('hidden', carousel.scrollLeft <= 0);
      rightBtn.classList.toggle('hidden',
        Math.ceil(carousel.scrollLeft + carousel.offsetWidth) >= carousel.scrollWidth);
    }
    updateButtons();
    leftBtn.addEventListener('click', () => carousel.scrollBy({ left: -300, behavior: 'smooth' }));
    rightBtn.addEventListener('click', () => carousel.scrollBy({ left: 300, behavior: 'smooth' }));
    carousel.addEventListener('scroll', updateButtons);

    document.getElementById('mobile-menu-button')
      .addEventListener('click', () => document.getElementById('mobile-menu').classList.toggle('hidden'));

    // ————————————————
    // Kalau ada keyword (hasil search), langsung expand & scroll
    @if(!empty($keyword))
      // tambahkan class expanded
      gamesSection.classList.add('expanded');
      // sesuaikan teks tombol
      toggleBtn.textContent = 'View Less';
      // scroll ke atas section
      gamesSection.scrollIntoView({ behavior: 'smooth' });
    @endif

    // tetep buat toggle kalau user klik lagi
    toggleBtn.addEventListener('click', () => {
      gamesSection.classList.toggle('expanded');
      toggleBtn.textContent = gamesSection.classList.contains('expanded') ? 'View Less' : 'View More';
    });
  });
</script>

  </section>

  <!-- Footer -->
  <footer class="bg-gaming-dark text-gray-400">
    <div class="max-w-screen-2xl mx-auto px-6 py-12">
      <div class="flex flex-col md:flex-row justify-between items-center mb-8 border-b border-gray-700 pb-8">
        <h3 class="text-white text-xl font-bold tracking-widest">STORE</h3>
        <div class="flex space-x-4 mt-4 md:mt-0">
          <a href="#" class="hover:text-white"><i class="fab fa-facebook-f"></i></a>
          <a href="#" class="hover:text-white"><i class="fab fa-twitter"></i></a>
          <a href="#" class="hover:text-white"><i class="fab fa-youtube"></i></a>
        </div>
      </div>
      <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 mb-12">
        <!-- Kolom footer seperti semula -->
      </div>
      <div class="border-t border-gray-700 pt-8 flex flex-col lg:flex-row justify-between items-center text-sm">
        <p class="mb-4 lg:mb-0 text-justify lg:text-left">
          © 2025, Epic Games, Inc. All rights reserved. …
        </p>
        <ul class="flex flex-wrap space-x-6">
          <li><a href="#" class="hover:text-white">Terms of service</a></li>
          <li><a href="#" class="hover:text-white">Privacy policy</a></li>
          <li><a href="#" class="hover:text-white">Safety & security</a></li>
          <li><a href="#" class="hover:text-white">Store refund policy</a></li>
          <li><a href="#" class="hover:text-white">Publisher Index</a></li>
        </ul>
      </div>
      <div class="fixed bottom-6 right-6">
        <a href="#top" class="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-full flex items-center space-x-2 shadow-lg">
          <span>Back to top</span><i class="fas fa-arrow-up"></i>
        </a>
      </div>
    </div>
  </footer>

  <!-- Scripts for carousel & mobile menu -->
  <script>
    const carousel = document.getElementById('carousel');
    const leftBtn = document.getElementById('carousel-left');
    const rightBtn = document.getElementById('carousel-right');
    function updateButtons() {
      leftBtn.classList.toggle('hidden', carousel.scrollLeft <= 0);
      rightBtn.classList.toggle('hidden',
        Math.ceil(carousel.scrollLeft + carousel.offsetWidth) >= carousel.scrollWidth);
    }
    updateButtons();
    leftBtn.addEventListener('click', () => carousel.scrollBy({ left: -300, behavior: 'smooth' }));
    rightBtn.addEventListener('click', () => carousel.scrollBy({ left: 300, behavior: 'smooth' }));
    carousel.addEventListener('scroll', updateButtons);

    document.getElementById('mobile-menu-button')
      .addEventListener('click', () => document.getElementById('mobile-menu').classList.toggle('hidden'));
  </script>
</body>
</html>
