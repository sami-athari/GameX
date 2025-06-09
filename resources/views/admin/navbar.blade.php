<!-- resources/views/layouts/navbar.blade.php -->
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
  .glass {
    backdrop-filter: blur(8px);
    background: rgba(26, 32, 44, 0.7);
  }

  .hover-lift {
    transition: transform 0.3s ease;
  }
  .hover-lift:hover {
    transform: translateY(-4px);
  }

  .btn-gaming {
    background-color: rgba(255, 255, 255, 0.1);
    transition: background-color 0.3s ease, transform 0.3s ease;
  }
  .btn-gaming:hover {
    background-color: rgba(255, 255, 255, 0.2);
    transform: translateY(-2px);
  }

  .btn-gaming-blue {
    background-color: #4299e1;
    color: white;
    transition: background-color 0.3s ease, transform 0.3s ease;
  }
  .btn-gaming-blue:hover {
    background-color: #63b3ed;
    transform: translateY(-2px);
  }
</style>
<section class="min-h-screen pt-20">
<nav class="font-sans fixed top-0 left-0 right-0 z-50 glass">
  <div class="max-w-screen-2xl mx-auto px-6">
    <div class="flex justify-between items-center py-4">
      <h2 class="text-2xl font-extrabold">
        Game<span class="text-red-600">X</span>
      </h2>
      <div class="hidden md:flex items-center space-x-8">
        <a href="{{ route('home') }}" class="text-gray-300 hover:text-red-600">Home</a>
        <a href="{{ route('transaksi.cart') }}" class="text-gray-300 hover:text-red-600">Cart</a>
        <a href="{{ route('transaksi.library') }}" class="text-gray-300 hover:text-red-600">Library</a>
        <form action="{{ route('transaksi.search') }}" method="GET" class="relative ml-6">
          <input type="text" name="q" placeholder="Search games..."
                 class="py-1.5 px-4 rounded-full bg-gaming-dark text-sm focus:outline-none w-40 md:w-56 font-sans"/>
          <button type="submit"
                  class="absolute top-1/2 right-3 -translate-y-1/2 text-gray-400 hover:text-white">
            <i class="fas fa-search"></i>
          </button>
        </form>
      </div>
      <div class="flex items-center space-x-3">
        @guest
          <a href="{{ route('login') }}" class="px-4 py-2 btn-gaming rounded-lg hover-lift font-sans">Login</a>
          <a href="{{ route('register') }}" class="px-4 py-2 btn-gaming-blue rounded-lg hover-lift font-sans">Register</a>
        @else
          <div class="relative group">
            <button class="flex items-center space-x-2 font-sans">
              <i class="fas fa-user"></i>
              <span>{{ Auth::user()->name }}</span>
              <i class="fas fa-chevron-down text-sm"></i>
            </button>
            <div class="absolute right-0 mt-2 w-48 bg-gaming-card rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 font-sans">
              <a href="#" class="block px-4 py-2 hover:bg-gaming-hover">Profile</a>
              <div class="border-t border-gray-600 my-1"></div>
              <a href="{{ route('logout') }}"
                 onclick="event.preventDefault(); document.getElementById('logout-form').submit();"
                 class="block px-4 py-2 hover:bg-gaming-hover">Logout</a>
              <form id="logout-form" action="{{ route('logout') }}" method="POST" class="hidden">@csrf</form>
            </div>
          </div>
        @endguest
      </div>
      <div class="md:hidden">
        <button id="mobile-menu-button" class="font-sans"><i class="fas fa-bars text-xl"></i></button>
      </div>
    </div>
    <div id="mobile-menu" class="md:hidden hidden pb-4 font-sans">
      <a href="{{ route('home') }}" class="block py-2 hover:text-red-600">Home</a>
      <a href="{{ route('transaksi.cart') }}" class="block py-2 hover:text-red-600">Cart</a>
      <a href="{{ route('transaksi.library') }}" class="block py-2 hover:text-red-600">Library</a>
      <a href="{{ route('transaksi.library') }}" class="block py-2 hover:text-red-600">Transaksi</a>
    </div>
  </div>
</nav>
