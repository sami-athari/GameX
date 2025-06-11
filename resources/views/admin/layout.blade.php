<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>GameX Admin - @yield('title')</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" rel="stylesheet">
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        'gaming-dark': '#2d3748',
                        'gaming-darker': '#1a202c',
                        'gaming-red-600': '#dc2626',
                        'gaming-red-500': '#ef4444',
                        'gaming-blue': '#4299e1',
                        'gaming-card': '#4a5568',
                        'gaming-hover': '#2c3746',
                    },
                    fontFamily: { sans: ['Figtree', 'sans-serif'] }
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
            transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .hover-lift:hover {
            transform: translateY(-4px);
            box-shadow: 0 4px 20px rgba(220, 38, 38, 0.3);
        }
        .btn-gaming {
            background-color: rgba(255, 255, 255, 0.1);
            transition: background-color 0.3s ease, transform 0.3s ease;
        }
        .btn-gaming:hover {
            background-color: rgba(255, 255, 255, 0.2);
            transform: translateY(-2px);
        }
        .btn-gaming-red {
            background-color: #dc2626;
            color: white;
            transition: background-color 0.3s ease, transform 0.3s ease;
        }
        .btn-gaming-red:hover {
            background-color: #ef4444;
            transform: translateY(-2px);
        }
    </style>
</head>
<body class="bg-gaming-darker text-white font-sans">
    <!-- Navbar -->
    <nav class="glass fixed top-0 left-0 right-0 z-50">
        <div class="max-w-screen-2xl mx-auto px-6">
            <div class="flex justify-between items-center py-4">
                <div class="flex items-center space-x-4">
                    <button id="sidebarToggle" class="text-gray-300 hover:text-gaming-red-600">
                        <i class="fas fa-bars text-xl"></i>
                    </button>
                    <a href="{{ route('admin.beranda') }}" class="text-2xl font-extrabold">
                        Game<span class="text-gaming-red-600">X</span> Admin
                    </a>
                </div>
                <div class="flex items-center space-x-4">
                    <div class="relative group">
                        <button class="flex items-center space-x-2 text-gray-300 hover:text-gaming-red-600 btn-gaming px-4 py-2 rounded-lg hover-lift">
                            <i class="fas fa-user"></i>
                            <span>{{ Auth::user()->name ?? 'Admin' }}</span>
                            <i class="fas fa-chevron-down text-sm"></i>
                        </button>
                        <div class="absolute right-0 mt-2 w-48 bg-gaming-card rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                            <a href="#" class="block px-4 py-2 hover:bg-gaming-hover">Profile</a>
                            <div class="border-t border-gray-600 my-1"></div>
                            <a href="{{ route('logout') }}" onclick="event.preventDefault(); document.getElementById('logout-form').submit();" class="block px-4 py-2 hover:bg-gaming-hover">Logout</a>
                            <form id="logout-form" action="{{ route('logout') }}" method="POST" class="hidden">@csrf</form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>

    <!-- Overlay for small screens -->
    <div id="sidebarOverlay" class="fixed inset-0 bg-black bg-opacity-50 z-10 hidden lg:hidden"></div>

    <!-- Sidebar -->
    <aside id="sidebar" class="bg-gaming-dark w-64 min-h-screen border-r border-gray-700 transition-transform duration-300 ease-in-out fixed z-20">
        <div class="flex flex-col h-full p-4 pt-20">
            <ul class="space-y-4 flex-1">
                <li class="group">
                    <a href="{{ route('admin.beranda') }}" class="flex items-center space-x-3 text-gray-300 hover:text-gaming-red-600 hover:bg-gaming-hover rounded-lg px-3 py-2 transition-all duration-300">
                        <i class="fas fa-home text-xl"></i>
                        <span>Dashboard</span>
                    </a>
                </li>
                <li class="group relative">
                    <button class="flex items-center space-x-3 text-gray-300 hover:text-gaming-red-600 hover:bg-gaming-hover rounded-lg px-3 py-2 transition-all duration-300 w-full text-left">
                        <i class="fas fa-plus text-xl"></i>
                        <span>Create</span>
                    </button>
                    <div class="hidden group-hover:block mt-1 space-y-1 lg:pl-8">
                        <a href="{{ route('produk.create') }}" class="block px-4 py-2 text-gray-300 hover:bg-gaming-hover hover:text-gaming-red-600 rounded-lg">Create Produk</a>
                        <a href="{{ route('kategori.create') }}" class="block px-4 py-2 text-gray-300 hover:bg-gaming-hover hover:text-gaming-red-600 rounded-lg">Create Kategori</a>
                    </div>
                </li>
                <li class="group">
                    <a href="{{ route('admin.home') }}" class="flex items-center space-x-3 text-gray-300 hover:text-gaming-red-600 hover:bg-gaming-hover rounded-lg px-3 py-2 transition-all duration-300">
                        <i class="fas fa-gamepad text-xl"></i>
                        <span>Produk</span>
                    </a>
                </li>
                <li class="group">
                    <a href="{{ route('kategori.index') }}" class="flex items-center space-x-3 text-gray-300 hover:text-gaming-red-600 hover:bg-gaming-hover rounded-lg px-3 py-2 transition-all duration-300">
                        <i class="fas fa-tags text-xl"></i>
                        <span>Kategori</span>
                    </a>
                </li>
                <li class="group">
                    <a href="{{ route('transaksi.transaksiManager') }}" class="flex items-center space-x-3 text-gray-300 hover:text-gaming-red-600 hover:bg-gaming-hover rounded-lg px-3 py-2 transition-all duration-300">
                        <i class="fas fa-shopping-cart text-xl"></i>
                        <span>Pesanan</span>
                    </a>
                </li>
                <li class="group">
                    <a href="{{ route('home') }}" class="flex items-center space-x-3 text-gray-300 hover:text-gaming-red-600 hover:bg-gaming-hover rounded-lg px-3 py-2 transition-all duration-300">
                        <i class="fas fa-users text-xl"></i>
                        <span>Atur User</span>
                    </a>
                </li>
                <li class="group">
                    <a href="{{ url('/') }}" class="flex items-center space-x-3 text-gray-300 hover:text-gaming-red-600 hover:bg-gaming-hover rounded-lg px-3 py-2 transition-all duration-300">
                                <i class="fas fa-external-link-alt"></i>
                                <span>Lihat Website</span>
                            </a>
                </li>
            </ul>
        </div>
    </aside>

    <!-- Main Content -->
    <main id="mainContent" class="p-6 pt-16 transition-all duration-300 lg:ml-64 max-w-screen-2xl mx-auto">
        @yield('content')
    </main>

    <!-- Toggle Script -->
    <script>
        const sidebarToggle = document.getElementById('sidebarToggle');
        const sidebar = document.getElementById('sidebar');
        const sidebarOverlay = document.getElementById('sidebarOverlay');
        const mainContent = document.getElementById('mainContent');

        sidebarToggle.addEventListener('click', () => {
            if (sidebar.classList.contains('-translate-x-full')) {
                sidebar.classList.remove('-translate-x-full');
                sidebarOverlay.classList.remove('hidden');
                mainContent.classList.add('lg:ml-64');
            } else {
                sidebar.classList.add('-translate-x-full');
                sidebarOverlay.classList.add('hidden');
                mainContent.classList.remove('lg:ml-64');
            }
        });

        sidebarOverlay.addEventListener('click', () => {
            sidebar.classList.add('-translate-x-full');
            sidebarOverlay.classList.add('hidden');
            mainContent.classList.remove('lg:ml-64');
        });
    </script>
</body>
</html>
