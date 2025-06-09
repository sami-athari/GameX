<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ShopGaming - Temukan Game Favoritmu</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet">
</head>

<body class="bg-gray-900 text-white">
    <!-- Navigation -->
    <nav class="bg-gray-800 p-4">
        <div class="container mx-auto flex justify-between items-center">
            <div class="flex items-center space-x-2">
                <i class="fas fa-gamepad text-purple-500 text-2xl"></i>
                <span class="font-bold text-xl text-white">ShopGames</span>
            </div>
            <div class="hidden md:flex space-x-6">
                <a href="#" class="text-gray-300 hover:text-white">Home</a>
                <a href="#" class="text-gray-300 hover:text-white">Catalog</a>
                <a href="#" class="text-gray-300 hover:text-white">Contact</a>
            </div>
            <div class="flex space-x-2">
                <a href="{{ route('login') }}"
                    class="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded">Login</a>
                <a href="{{ route('register') }}"
                    class="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded">Register</a>
            </div>
        </div>
    </nav>

    <!-- Hero Section -->
    <div class="relative bg-cover bg-center h-96"
        style="background-image: url('https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota2_social.jpg');">
        <div class="absolute inset-0 bg-black bg-opacity-60"></div>
        <div class="container mx-auto px-4 h-full flex items-center justify-center relative z-10">
            <div class="text-center">
                <h1 class="text-4xl md:text-5xl font-bold mb-4">"Selamat Datang di ShopGaming"</h1>
                <p class="text-xl text-gray-300 mb-8">"Temukan & beli game favoritmu dengan harga terbaik"</p>
                <div class="flex justify-center space-x-4">
                    <a href="{{ route('login') }}"
                        class="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-medium transition duration-300 transform hover:scale-105">Shop</a>
                    <a href={{ route('register') }}"
                        class="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-medium transition duration-300 transform hover:scale-105">Explore</a>
                </div>
            </div>
        </div>
    </div>

    <!-- Game Categories -->
    <div class="container mx-auto px-4 py-16">
        <h2 class="text-2xl font-bold mb-2">Game</h2>
        <p class="text-gray-400 mb-8">Terpopuler</p>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <!-- Game Card 1 -->
            <div class="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300">
                <div class="bg-gray-700 h-48 flex items-center justify-center">
                    <i class="fas fa-gamepad text-5xl text-gray-500"></i>
                </div>
                <div class="p-6">
                    <h3 class="font-bold text-xl mb-2">Title</h3>
                    <p class="text-gray-400 text-sm mb-4">Game populer dengan grafis yang menarik dan gameplay seru.
                        Hadapi tantangan dan taklukkan semua level.</p>
                    <a href="#" class="text-purple-500 hover:text-purple-400">Lihat Detail →</a>
                </div>
            </div>

            <!-- Game Card 2 -->
            <div class="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300">
                <div class="bg-gray-700 h-48 flex items-center justify-center">
                    <i class="fas fa-gamepad text-5xl text-gray-500"></i>
                </div>
                <div class="p-6">
                    <h3 class="font-bold text-xl mb-2">Title</h3>
                    <p class="text-gray-400 text-sm mb-4">Petualangan epik dengan berbagai karakter yang menarik.
                        Eksplorasi dunia luas dan selesaikan misi.</p>
                    <a href="#" class="text-purple-500 hover:text-purple-400">Lihat Detail →</a>
                </div>
            </div>

            <!-- Game Card 3 -->
            <div class="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300">
                <div class="bg-gray-700 h-48 flex items-center justify-center">
                    <i class="fas fa-gamepad text-5xl text-gray-500"></i>
                </div>
                <div class="p-6">
                    <h3 class="font-bold text-xl mb-2">Title</h3>
                    <p class="text-gray-400 text-sm mb-4">Strategi yang menantang dengan visual memukau. Buat keputusan
                        cerdas dan kalahkan lawan-lawanmu.</p>
                    <a href="#" class="text-purple-500 hover:text-purple-400">Lihat Detail →</a>
                </div>
            </div>
        </div>
    </div>

    <!-- Features Section -->
    <div class="bg-gray-800 py-16">
        <div class="container mx-auto px-4">
            <h2 class="text-2xl font-bold mb-12 text-center">Tentang</h2>
            <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
                <!-- Feature 1 -->
                <div class="flex items-start space-x-4">
                    <div class="bg-purple-600 rounded-full p-2 mt-1">
                        <span class="text-white font-bold">1</span>
                    </div>
                    <div>
                        <h3 class="font-bold mb-2">Game Original & Legal</h3>
                        <p class="text-gray-400 text-sm">Semua game yang kami jual adalah produk asli dan legal. Nikmati
                            game tanpa khawatir dengan garansi dan dukungan resmi dari pengembang.</p>
                    </div>
                </div>

                <!-- Feature 2 -->
                <div class="flex items-start space-x-4">
                    <div class="bg-purple-600 rounded-full p-2 mt-1">
                        <span class="text-white font-bold">2</span>
                    </div>
                    <div>
                        <h3 class="font-bold mb-2">Transaksi Cepat & Aman</h3>
                        <p class="text-gray-400 text-sm">Metode pembayaran beragam dengan keamanan tingkat tinggi. Game
                            langsung tersedia setelah pembayaran terverifikasi.</p>
                    </div>
                </div>

                <!-- Feature 3 -->
                <div class="flex items-start space-x-4">
                    <div class="bg-purple-600 rounded-full p-2 mt-1">
                        <span class="text-white font-bold">3</span>
                    </div>
                    <div>
                        <h3 class="font-bold mb-2">Pilihan Game Terlengkap</h3>
                        <p class="text-gray-400 text-sm">Tersedia game untuk semua genre dan platform. Dari action,
                            adventure, hingga simulator dan sport games.</p>
                    </div>
                </div>

                <!-- Feature 4 -->
                <div class="flex items-start space-x-4">
                    <div class="bg-purple-600 rounded-full p-2 mt-1">
                        <span class="text-white font-bold">4</span>
                    </div>
                    <div>
                        <h3 class="font-bold mb-2">ShopPoints</h3>
                        <p class="text-gray-400 text-sm">Dapatkan poin untuk setiap pembelian yang dapat ditukarkan
                            dengan diskon atau game gratis. Member loyal mendapatkan keuntungan lebih.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    @include('user.footer')
</body>

</html>
