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
      height: 50vh; /* Menyesuaikan dengan Epic Games */
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
      top: 50%;
      transform: translateY(-50%);
      background-color: rgba(0, 0, 0, 0.5);
      border: none;
      color: white;
      padding: 1rem;
      cursor: pointer;
      z-index: 20;
      transition: background-color 0.3s ease;
      border-radius: 50%;
    }
    .hero-nav-button:hover {
      background-color: rgba(0, 0, 0, 0.7);
    }
    .hero-nav-button.left { left: 1rem; }
    .hero-nav-button.right { right: 1rem; }
    .hero-dots {
      position: absolute;
      bottom: 1rem;
      left: 50%;
      transform: translateX(-50%);
      display: flex;
      gap: 0.5rem;
      z-index: 20;
    }
    .hero-dot {
      width: 10px;
      height: 10px;
      background-color: rgba(255, 255, 255, 0.5);
      border-radius: 50%;
      cursor: pointer;
      transition: background-color 0.3s ease;
    }
    .hero-dot.active {
      background-color: white;
    }

    /* Side Panel Styles */
    .side-panel {
      position: absolute;
      top: 0;
      right: 0;
      height: 50vh;
      width: 20%;
      background-color: rgba(0, 0, 0, 0.8);
      padding: 1rem;
      overflow-y: auto;
    }
    .side-panel-item {
      display: flex;
      align-items: center;
      padding: 0.5rem;
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    }
    .side-panel-item img {
      width: 40px;
      height: 60px;
      object-fit: cover;
      margin-right: 0.5rem;
    }
    .side-panel-item span {
      font-size: 0.9rem;
      color: #ccc;
    }
  </style>
</head>

<body class="bg-gaming-darker text-white font-sans">
  <!-- Navigation -->
  @include('user.navbar')

 <!-- Hero Interaktif -->
<section class="pt-20">
  <div class="max-w-screen-2xl mx-auto px-6 flex flex-col lg:flex-row gap-8">
    <!-- Left: Hero Carousel -->
    <div class="relative lg:w-3/4 rounded-2xl overflow-hidden shadow-2xl">
      <div class="hero-carousel h-[70vh] relative" id="heroCarousel">
        @foreach($produks->take(5) as $index => $produk)
          <div class="hero-slide absolute inset-0 transition-opacity duration-700 ease-in-out {{ $index === 0 ? 'opacity-100 z-10' : 'opacity-0 z-0' }}" data-index="{{ $index }}">
            <img src="{{ Storage::url($produk->gambar) }}" alt="{{ $produk->nama }}" class="w-full h-full object-cover" loading="lazy" />
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
            <div class="absolute bottom-8 left-8 max-w-md space-y-4 text-white">
              <h2 class="text-4xl md:text-5xl font-bold">
                {{ $produk->nama }} {{ $produk->discount_label ? 'Enhanced' : '' }}
              </h2>
              <p class="text-lg text-gray-300">{{ Str::limit($produk->deskripsi, 100) }}</p>
              <div class="flex items-center space-x-4">
                @if($produk->orig_price)
                  <span class="line-through text-gray-400">
                    IDR {{ number_format($produk->orig_price, 0, ',', '.') }}
                  </span>
                  <span class="text-lg font-bold text-gaming-blue">
                    IDR {{ number_format($produk->harga, 0, ',', '.') }}
                  </span>
                  <span class="px-2 py-1 bg-gaming-blue text-xs rounded text-white">
                    -{{ round((($produk->orig_price - $produk->harga)/$produk->orig_price)*100) }}%
                  </span>
                @else
                  <span class="text-2xl font-bold">
                    {{ $produk->harga == 0 ? 'FREE' : 'Rp '.number_format($produk->harga, 0, ',', '.') }}
                  </span>
                @endif
              </div>
              <div class="flex space-x-4">
                <button onclick="window.location.href='{{ route('deskripsi', $produk->id) }}'"
                        class="px-6 py-3 bg-white text-gaming-red-600 rounded-lg hover:bg-gray-100 hover-lift transition-colors">
                  View More
                </button>
                <form action="{{ route('transaksi.beli') }}" method="POST" class="">
                  @csrf
                  <input type="hidden" name="produk_id" value="{{ $produk->id }}">
                  <button type="submit"
                          class="px-4 py-3 border border-white rounded-lg hover:bg-white hover:text-black transition">
                    Add to Cart
                  </button>
                </form>
              </div>
            </div>
          </div>
        @endforeach

        <!-- Prev/Next Buttons -->
        <button id="hero-prev" class="hero-nav-button left-2"><i class="fas fa-chevron-left"></i></button>
        <button id="hero-next" class="hero-nav-button right-2"><i class="fas fa-chevron-right"></i></button>
        <!-- Dots -->
        <div id="hero-dots" class="hero-dots absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2"></div>
      </div>
    </div>

    <!-- Right: Side Panel Thumbnails -->
    <div class="lg:w-1/4 space-y-4 overflow-y-auto h-[70vh] bg-gaming-card rounded-xl p-4">
      @foreach($produks->skip(1)->take(5) as $index => $sideProduct)
        <div class="side-panel-item flex items-center cursor-pointer group"
             onclick="goToSlide({{ $index + 1 }})"
             data-index="{{ $index + 1 }}">
          <img src="{{ Storage::url($sideProduct->gambar) }}"
               alt="{{ $sideProduct->nama }}"
               class="w-16 h-24 object-cover rounded-md group-hover:scale-105 transition-transform"
               loading="lazy" />
          <span class="ml-3 text-sm text-gray-300 group-hover:text-white transition-colors">
            {{ $sideProduct->nama }}
          </span>
        </div>
      @endforeach
    </div>
  </div>
</section>

<!-- JavaScript untuk Carousel -->
<script>
  document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.hero-slide');
    const prevButton = document.getElementById('hero-prev');
    const nextButton = document.getElementById('hero-next');
    const dotsContainer = document.getElementById('hero-dots');
    let currentSlide = 0;
    const slideInterval = 5000; // 5 detik
    let autoSlide;

    // Inisialisasi dots
    slides.forEach((_, index) => {
      const dot = document.createElement('span');
      dot.classList.add('w-3', 'h-3', 'rounded-full', 'bg-gray-400', 'cursor-pointer', 'hover:bg-white');
      dot.dataset.index = index;
      dot.addEventListener('click', () => goToSlide(index));
      dotsContainer.appendChild(dot);
    });
    updateDots();

    // Fungsi untuk perpindahan slide
    function goToSlide(index) {
      slides.forEach((slide, i) => {
        slide.classList.toggle('opacity-100', i === index);
        slide.classList.toggle('opacity-0', i !== index);
        slide.classList.toggle('z-10', i === index);
        slide.classList.toggle('z-0', i !== index);
      });
      currentSlide = index;
      updateDots();
    }

    // Fungsi untuk update dots
    function updateDots() {
      document.querySelectorAll('#hero-dots span').forEach((dot, index) => {
        dot.classList.toggle('bg-white', index === currentSlide);
      });
    }

    // Event untuk tombol prev
    prevButton.addEventListener('click', () => {
      currentSlide = (currentSlide - 1 + slides.length) % slides.length;
      goToSlide(currentSlide);
    });

    // Event untuk tombol next
    nextButton.addEventListener('click', () => {
      currentSlide = (currentSlide + 1) % slides.length;
      goToSlide(currentSlide);
    });

    // Auto slide
    function startAutoSlide() {
      autoSlide = setInterval(() => {
        currentSlide = (currentSlide + 1) % slides.length;
        goToSlide(currentSlide);
      }, slideInterval);
    }

    function stopAutoSlide() {
      clearInterval(autoSlide);
    }

    // Mulai auto slide
    startAutoSlide();

    // Hover untuk pause
    const carousel = document.querySelector('.hero-carousel');
    carousel.addEventListener('mouseenter', stopAutoSlide);
    carousel.addEventListener('mouseleave', startAutoSlide);

    // Sinkronisasi dengan thumbnail
    document.querySelectorAll('.side-panel-item').forEach(item => {
      item.addEventListener('click', (e) => {
        const index = parseInt(e.currentTarget.dataset.index) - 1; // Sesuaikan index (skip(1) membuat offset)
        goToSlide(index);
      });
    });
  });
</script>

<style>
  .hero-nav-button {
    @apply absolute top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition;
  }
  .hero-nav-button.left { left: 10px; }
  .hero-nav-button.right { right: 10px; }
  .hero-dots span { transition: background-color 0.3s; }
  .hero-slide { display: block; } /* Pastikan slide ditampilkan sebagai block */
</style>

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
                    <img src="{{ asset('storage/' . $produk->gambar) }}" alt="" class="w-full h-full object-cover"/>
                  @else
                    <div class="w-full h-full flex items-center justify-center bg-gradient-to-br from-gaming-purple to-gaming-blue">
                      <i class="fas fa-gamepad text-4xl text-white opacity-50"></i>
                    </div>
                  @endif
                </div>
                <div class="p-4">
                  <h3 class="text-lg font-semibold truncate">{{ $produk->nama }}</h3>
                  <p class="text-sm text-gray-400 mt-1">Rp {{ number_format($produk->harga, 0, ',', '.') }}</p>
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
</section>

    <!-- Modal untuk gambar produk -->
    <div id="modal" class="modal">
      <span class="close-modal" onclick="closeModal()">×</span>
      <div class="modal-content">
        <img id="modal-image" src="" alt="Product Image">
      </div>
    </div>

    <script>
      document.addEventListener('DOMContentLoaded', () => {
        const carousel = document.getElementById('carousel');
        const leftBtn = document.getElementById('carousel-left');
        const rightBtn = document.getElementById('carousel-right');
        const toggleBtn = document.getElementById('toggle-view');
        const gamesSection = document.getElementById('games-section');
        const slides = document.querySelectorAll('.hero-slide');
        const prevBtn = document.getElementById('hero-prev');
        const nextBtn = document.getElementById('hero-next');
        const dotsContainer = document.getElementById('hero-dots');
        let currentSlide = 0;

        // Initialize hero dots
        slides.forEach((_, index) => {
          const dot = document.createElement('div');
          dot.classList.add('hero-dot');
          dot.addEventListener('click', () => goToSlide(index));
          dotsContainer.appendChild(dot);
        });
        updateDots();

        // Auto slide every 5 seconds
        let autoSlide = setInterval(nextSlide, 5000);

        // Navigation functions
        function goToSlide(index) {
          slides.forEach((slide, i) => {
            slide.classList.remove('active');
            if (i === index) slide.classList.add('active');
          });
          currentSlide = index;
          updateDots();
        }

        function nextSlide() {
          currentSlide = (currentSlide + 1) % slides.length;
          goToSlide(currentSlide);
        }

        function prevSlide() {
          currentSlide = (currentSlide - 1 + slides.length) % slides.length;
          goToSlide(currentSlide);
        }

        prevBtn.addEventListener('click', () => {
          prevSlide();
          resetAutoSlide();
        });

        nextBtn.addEventListener('click', () => {
          nextSlide();
          resetAutoSlide();
        });

        function updateDots() {
          document.querySelectorAll('.hero-dot').forEach((dot, index) => {
            dot.classList.toggle('active', index === currentSlide);
          });
        }

        function resetAutoSlide() {
          clearInterval(autoSlide);
          autoSlide = setInterval(nextSlide, 5000);
        }

        // Initial slide
        goToSlide(0);

        // Carousel functions
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

        // Toggle view
        @if(!empty($keyword))
          gamesSection.classList.add('expanded');
          toggleBtn.textContent = 'View Less';
          gamesSection.scrollIntoView({ behavior: 'smooth' });
        @endif
        toggleBtn.addEventListener('click', () => {
          gamesSection.classList.toggle('expanded');
          toggleBtn.textContent = gamesSection.classList.contains('expanded') ? 'View Less' : 'View More';
        });

        // Modal functions
        function showModal(imageSrc) {
          const modal = document.getElementById('modal');
          const modalImage = document.getElementById('modal-image');
          modalImage.src = imageSrc;
          modal.style.display = 'flex';
        }

        function closeModal() {
          const modal = document.getElementById('modal');
          modal.style.display = 'none';
        }

        document.getElementById('modal').addEventListener('click', (e) => {
          if (e.target === document.getElementById('modal')) {
            closeModal();
          }
        });
      });

      function number_format(number, decimals, dec_point, thousands_sep) {
        number = (number + '').replace(/[^0-9+\-Ee.]/g, '');
        const n = !isFinite(+number) ? 0 : +number,
              prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
              sep = (typeof thousands_sep === 'undefined') ? ',' : thousands_sep,
              dec = (typeof dec_point === 'undefined') ? '.' : dec_point,
              s = '',
              toFixedFix = function (n, prec) {
                const k = Math.pow(10, prec);
                return '' + Math.round(n * k) / k;
              };
        s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.');
        if (s[0].length > 3) {
          s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
        }
        if ((s[1] || '').length < prec) {
          s[1] = s[1] || '';
          s[1] += new Array(prec - s[1].length + 1).join('0');
        }
        return s.join(dec);
      }
    </script>
  </section>

  <!-- Footer -->
  <footer class="bg-gradient-to-b from-gaming-dark to-gaming-darker text-gray-400">
  <div class="max-w-screen-2xl mx-auto px-6 py-12">
    <div class="flex flex-col md:flex-row justify-between items-center mb-8 border-b border-gray-700 pb-8">
      <h3 class="text-white text-xl font-bold tracking-widest">GAMEX STORE</h3>
      <div class="flex space-x-4 mt-4 md:mt-0">
        <a href="#" class="hover:text-gaming-purple transition"><i class="fab fa-facebook-f"></i></a>
        <a href="#" class="hover:text-gaming-purple transition"><i class="fab fa-twitter"></i></a>
        <a href="#" class="hover:text-gaming-purple transition"><i class="fab fa-youtube"></i></a>
        <a href="#" class="hover:text-gaming-purple transition"><i class="fab fa-discord"></i></a>
      </div>
    </div>
    <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 mb-12">
      <!-- Kolom 1: Kategori -->
      <div>
        <h4 class="text-white font-semibold mb-4">Categories</h4>
        <ul class="space-y-2">
          <li><a href="#" class="hover:text-gaming-blue transition">Action</a></li>
          <li><a href="#" class="hover:text-gaming-blue transition">RPG</a></li>
          <li><a href="#" class="hover:text-gaming-blue transition">Strategy</a></li>
          <li><a href="#" class="hover:text-gaming-blue transition">Multiplayer</a></li>
        </ul>
      </div>
      <!-- Kolom 2: Support -->
      <div>
        <h4 class="text-white font-semibold mb-4">Support</h4>
        <ul class="space-y-2">
          <li><a href="#" class="hover:text-gaming-blue transition">Help Center</a></li>
          <li><a href="#" class="hover:text-gaming-blue transition">Contact Us</a></li>
          <li><a href="#" class="hover:text-gaming-blue transition">FAQ</a></li>
        </ul>
      </div>
      <!-- Kolom 3: About -->
      <div>
        <h4 class="text-white font-semibold mb-4">About Us</h4>
        <ul class="space-y-2">
          <li><a href="#" class="hover:text-gaming-blue transition">Our Story</a></li>
          <li><a href="#" class="hover:text-gaming-blue transition">Careers</a></li>
          <li><a href="#" class="hover:text-gaming-blue transition">Press</a></li>
        </ul>
      </div>
      <!-- Kolom 4: Legal -->
      <div>
        <h4 class="text-white font-semibold mb-4">Legal</h4>
        <ul class="space-y-2">
          <li><a href="#" class="hover:text-gaming-blue transition">Terms of Service</a></li>
          <li><a href="#" class="hover:text-gaming-blue transition">Privacy Policy</a></li>
          <li><a href="#" class="hover:text-gaming-blue transition">Refund Policy</a></li>
        </ul>
      </div>
      <!-- Kolom 5: Contact -->
      <div>
        <h4 class="text-white font-semibold mb-4">Contact</h4>
        <ul class="space-y-2">
          <li><a href="mailto:support@gamex.com" class="hover:text-gaming-blue transition">support@gamex.com</a></li>
          <li><a href="tel:+628123456789" class="hover:text-gaming-blue transition">+62 812-3456-789</a></li>
          <li><p>Jakarta, Indonesia</p></li>
        </ul>
      </div>
    </div>
    <div class="border-t border-gray-700 pt-8 flex flex-col lg:flex-row justify-between items-center text-sm">
      <p class="mb-4 lg:mb-0 text-gray-500 text-center lg:text-left">
        © {{ date('Y') }}, GameX, Inc. All rights reserved. Powered by passion for gaming.
      </p>
      <ul class="flex flex-wrap space-x-6">
        <li><a href="#" class="hover:text-gaming-purple transition">Terms of Service</a></li>
        <li><a href="#" class="hover:text-gaming-purple transition">Privacy Policy</a></li>
        <li><a href="#" class="hover:text-gaming-purple transition">Safety & Security</a></li>
        <li><a href="#" class="hover:text-gaming-purple transition">Store Refund Policy</a></li>
        <li><a href="#" class="hover:text-gaming-purple transition">Publisher Index</a></li>
      </ul>
    </div>
  </div>
  <div class="fixed bottom-6 right-6">
    <a href="#top" class="bg-gaming-card hover:bg-gaming-blue text-white px-4 py-2 rounded-full flex items-center space-x-2 shadow-lg hover-lift transition">
      <span>Back to Top</span><i class="fas fa-arrow-up"></i>
    </a>
  </div>
</footer>

</body>
</html>
