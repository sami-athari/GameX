<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
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
            'gaming-dark': '#1a1a1a',
            'gaming-darker': '#0f0f0f',
            'gaming-purple': '#9f7aea',
            'gaming-blue': '#00aaff',
            'gaming-card': '#2a2a2a',
          },
          fontFamily: { sans: ['Figtree', 'sans-serif'] },
        }
      }
    }
  </script>
  <style>
    .glass { backdrop-filter: blur(8px); background: rgba(26, 32, 44, 0.7); }
    .hover-lift { transition: transform 0.3s ease; }
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
      background-color: rgba(0, 0, 0, 0.5);
      border: none; color: white; padding: 0.5rem;
      cursor: pointer; z-index: 10; transition: background-color 0.3s ease;
      border-radius: 9999px;
    }
    .carousel-button:hover { background-color: rgba(0, 0, 0, 0.7); }
    .carousel-button.left { left: 10px; }
    .carousel-button.right { right: 10px; }

    .card-hover-overlay::before {
      content: "";
      position: absolute; inset: 0;
      background: rgba(255, 255, 255, 0.1);
      opacity: 0; transition: opacity 0.3s ease;
      z-index: 10; border-radius: 0.75rem;
    }
    .card-hover-overlay:hover::before { opacity: 1; }

    .plus-button {
      position: absolute; top: 8px; right: 8px;
      background-color: rgba(180, 21, 21, 0.8);
      border-radius: 9999px; padding: 6px;
      cursor: pointer; transition: background-color 0.3s ease, transform 0.3s ease;
      z-index: 20; opacity: 0;
    }
    .card-hover-overlay:hover .plus-button { opacity: 1; }
    .plus-button:hover {
      background-color: rgba(255, 255, 255, 0.4);
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

    /* Modal untuk gambar produk */
    .modal {
      display: none;
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.9);
      z-index: 1000;
      justify-content: center;
      align-items: center;
    }
    .modal-content {
      max-width: 90%;
      max-height: 90vh;
    }
    .modal-content img {
      max-width: 100%;
      max-height: 100%;
      object-fit: contain;
    }
    .close-modal {
      position: absolute;
      top: 20px;
      right: 20px;
      color: white;
      font-size: 24px;
      cursor: pointer;
    }

    /* Hero Carousel Styles */
    .hero-carousel {
      position: relative;
      width: 100%;
      height: 50vh;
      overflow: hidden;
    }
    .hero-slide {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      opacity: 0;
      transition: opacity 0.5s ease-in-out;
    }
    .hero-slide.active {
      opacity: 1;
    }
    .hero-nav-button {
      position: absolute;
      top: 50%; transform: translateY(-50%);
      background-color: rgba(0, 0, 0, 0.5);
      border: none; color: white; padding: 1rem;
      cursor: pointer; z-index: 20; border-radius: 50%;
      transition: background-color 0.3s ease;
    }
    .hero-nav-button:hover { background-color: rgba(0, 0, 0, 0.7); }
    .hero-nav-button.left { left: 1rem; }
    .hero-nav-button.right { right: 1rem; }
    .hero-dots {
      position: absolute;
      bottom: 1rem; left: 50%; transform: translateX(-50%);
      display: flex; gap: 0.5rem; z-index: 20;
    }
    .hero-dot {
      width: 10px; height: 10px;
      background-color: rgba(255, 255, 255, 0.5);
      border-radius: 50%; cursor: pointer;
      transition: background-color 0.3s ease;
    }
    .hero-dot.active { background-color: white; }
  </style>
</head>
<body class="bg-gaming-darker text-white font-sans">
  @include('user.navbar')

  <!-- Hero Interaktif -->
  <section class="pt-20">
    <div class="max-w-screen-2xl mx-auto px-6 flex flex-col lg:flex-row gap-8">
      <!-- Left: Hero Carousel -->
      <div class="relative lg:w-3/4 rounded-2xl overflow-hidden shadow-2xl">
        <div class="hero-carousel h-[70vh] relative" id="heroCarousel">
          @foreach($produks->take(5) as $index => $produk)
            <div class="hero-slide {{ $index === 0 ? 'active' : '' }}" data-index="{{ $index }}">
              <img src="{{ Storage::url($produk->gambar) }}" alt="{{ $produk->nama }}" class="w-full h-full object-cover" loading="lazy" />
              <div class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              <div class="absolute bottom-8 left-8 max-w-md space-y-4 text-white">
                <h2 class="text-4xl md:text-5xl font-bold">{{ $produk->nama }} {{ $produk->discount_label ? 'Enhanced' : '' }}</h2>
                <p class="text-lg text-gray-300">{{ Str::limit($produk->deskripsi, 100) }}</p>
                <div class="flex items-center space-x-4">
                  @if($produk->orig_price)
                    <span class="line-through text-gray-400">IDR {{ number_format($produk->orig_price, 0, ',', '.') }}</span>
                    <span class="text-lg font-bold text-gaming-blue">IDR {{ number_format($produk->harga, 0, ',', '.') }}</span>
                    <span class="px-2 py-1 bg-gaming-blue text-xs rounded text-white">-{{ round((($produk->orig_price - $produk->harga)/$produk->orig_price)*100) }}%</span>
                  @else
                    <span class="text-2xl font-bold">{{ $produk->harga == 0 ? 'FREE' : 'Rp '.number_format($produk->harga, 0, ',', '.') }}</span>
                  @endif
                </div>
                <div class="flex space-x-4">
                  <button onclick="@auth window.location.href='{{ route('deskripsi', $produk->id) }}' @else window.location.href='{{ route('login') }}' @endauth" class="px-6 py-3 bg-white text-black rounded-lg hover-gray-100 hover-lift transition-colors">View More</button>
                  <form action="@auth{{ route('transaksi.beli') }}@else{{ route('login') }}@endauth" method="POST" class="">
                    @csrf
                    <input type="hidden" name="produk_id" value="{{ $produk->id }}">
                    <button type="submit" class="px-4 py-3 border border-white rounded-lg hover:bg-white hover:text-black transition">Add to Cart</button>
                  </form>
                </div>
              </div>
            </div>
          @endforeach

          <!-- Prev/Next Buttons -->
          <button id="hero-prev" class="hero-nav-button left"><i class="fas fa-chevron-left"></i></button>
          <button id="hero-next" class="hero-nav-button right"><i class="fas fa-chevron-right"></i></button>
          <!-- Dots -->
          <div id="hero-dots" class="hero-dots"></div>
        </div>
      </div>

      <!-- Right: Side Panel Thumbnails -->
      <div class="lg:w-1/4 space-y-4 overflow-y-auto h-[70vh] bg-gaming-card rounded-xl p-4">
        @foreach($produks->skip(1)->take(5) as $idx => $side)
          <div class="side-panel-item flex items-center cursor-pointer group" onclick="goToHero({{ $idx+1 }})">
            <img src="{{ Storage::url($side->gambar) }}" alt="{{ $side->nama }}" class="w-16 h-24 object-cover rounded-md group-hover:scale-105 transition-transform" loading="lazy" />
            <span class="ml-3 text-sm text-gray-300 group-hover:text-white transition-colors">{{ $side->nama }}</span>
          </div>
        @endforeach
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
            @foreach($produks as $game)
              <div class="relative min-w-[250px] bg-gaming-card rounded-xl overflow-hidden card-hover-overlay group flex-shrink-0 cursor-pointer" onclick="@auth window.location.href='{{ route('deskripsi', $game->id) }}' @else window.location.href='{{ route('login') }}' @endauth">
                @if($game->stok > 0)
                  <form action="@auth{{ route('transaksi.beli') }}@else{{ route('login') }}@endauth" method="POST" onclick="event.stopPropagation();" class="absolute top-2 right-2 z-10">
                    @csrf
                    <input type="hidden" name="produk_id" value="{{ $game->id }}">
                    <button type="submit" class="plus-button"><i class="fas fa-plus text-white"></i></button>
                  </form>
                @endif
                <div class="h-40 bg-gaming-darker overflow-hidden">
                  @if($game->gambar)
                    <img src="{{ asset('storage/'.$game->gambar) }}" alt="{{ $game->nama }}" class="w-full h-full object-cover"/>
                  @else
                    <div class="w-full h-full flex items-center justify-center bg-gradient-to-br from-gaming-purple to-gaming-blue">
                      <i class="fas fa-gamepad text-4xl text-white opacity-50"></i>
                    </div>
                  @endif
                </div>
                <div class="p-4">
                  <h3 class="text-lg font-semibold truncate">{{ $game->nama }}</h3>
                  <p class="text-sm text-gray-400 mt-1">Rp {{ number_format($game->harga,0,',','.') }}</p>
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

    <!-- Modal untuk gambar produk -->
    <div id="modal" class="modal">
      <span class="close-modal" onclick="closeModal()">×</span>
      <div class="modal-content"><img id="modal-image" src="" alt="Product Image"></div>
    </div>
  </section>

  <!-- Footer -->
  @include('user.footer')

  <!-- Scripts -->
  <script>
    document.addEventListener('DOMContentLoaded', () => {
      // Hero carousel
      const slides = document.querySelectorAll('.hero-slide');
      const prevBtn = document.getElementById('hero-prev');
      const nextBtn = document.getElementById('hero-next');
      const dotsContainer = document.getElementById('hero-dots');
      let currentSlide = 0;
      let autoSlide = setInterval(nextSlide, 5000);

      slides.forEach((_, i) => {
        const dot = document.createElement('div'); dot.classList.add('hero-dot'); dot.dataset.index = i;
        dot.addEventListener('click', () => goToSlide(i));
        dotsContainer.appendChild(dot);
      });
      updateDots();

      prevBtn.addEventListener('click', () => { prevSlide(); resetAuto(); });
      nextBtn.addEventListener('click', () => { nextSlide(); resetAuto(); });

      function goToSlide(i) {
        slides.forEach((s, idx) => s.classList.toggle('active', idx===i));
        currentSlide = i; updateDots();
      }
      function nextSlide() { goToSlide((currentSlide+1)%slides.length); }
      function prevSlide() { goToSlide((currentSlide-1+slides.length)%slides.length); }
      function updateDots() { document.querySelectorAll('.hero-dot').forEach((d, idx) => d.classList.toggle('active', idx===currentSlide)); }
      function resetAuto() { clearInterval(autoSlide); autoSlide = setInterval(nextSlide,5000); }

      // Side thumbnails
      window.goToHero = ((i)=>()=>goToSlide(i))();

      // Games carousel
      const carousel = document.getElementById('carousel');
      const lBtn = document.getElementById('carousel-left');
      const rBtn = document.getElementById('carousel-right');
      const toggle = document.getElementById('toggle-view');
      const gamesSec = document.getElementById('games-section');
      function updateBtns() {
        lBtn.classList.toggle('hidden', carousel.scrollLeft<=0);
        rBtn.classList.toggle('hidden', Math.ceil(carousel.scrollLeft+carousel.offsetWidth)>=carousel.scrollWidth);
      }
      updateBtns();
      lBtn.addEventListener('click', ()=>carousel.scrollBy({left:-300,behavior:'smooth'}));
      rBtn.addEventListener('click', ()=>carousel.scrollBy({left:300,behavior:'smooth'}));
      carousel.addEventListener('scroll', updateBtns);
      toggle.addEventListener('click', ()=>{
        gamesSec.classList.toggle('expanded');
        toggle.textContent = gamesSec.classList.contains('expanded')? 'View Less':'View More';
      });

      // Modal
      window.showModal=(src)=>{ document.getElementById('modal-image').src=src; document.getElementById('modal').style.display='flex'; }
      window.closeModal=()=>{ document.getElementById('modal').style.display='none'; }
      document.getElementById('modal').addEventListener('click',(e)=>{ if(e.target===document.getElementById('modal')) closeModal(); });
    });
  </script>
</body>
</html>
