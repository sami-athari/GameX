<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Mainkan Game - {{ $produk->nama }}</title>
    <style>
        body {
            background-color: #0f0f0f;
            color: #fff;
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
        }

        header {
            background-color: #1a1a1a;
            padding: 20px;
            text-align: center;
            border-bottom: 2px solid #333;
        }

        header h1 {
            font-size: 24px;
            margin: 0;
            color: #00ffcc;
        }

        .content {
            padding: 20px;
            text-align: center;
        }

        .content p {
            margin: 10px 0;
            color: #ccc;
        }

        .back-button {
            display: inline-block;
            margin-bottom: 20px;
            padding: 10px 20px;
            background-color: #333;
            color: #fff;
            border-radius: 5px;
            text-decoration: none;
            transition: background-color 0.3s ease;
        }

        .back-button:hover {
            background-color: #555;
        }

        iframe {
            border: none;
            margin-top: 20px;
            border-radius: 8px;
        }
    </style>
</head>
<body>

    <header>
        <h1>🎮 Mainkan: {{ $produk->nama }}</h1>
    </header>

    <div class="content">
        <p>ID Game: {{ $produk->id }}</p>

        @php
            $extractPath = public_path('games/' . $produk->kode_produk);
            $folders = array_filter(glob($extractPath . '/*'), 'is_dir');
            $folderName = count($folders) > 0 ? basename(reset($folders)) : null;
        @endphp

        @if($folderName)
            <iframe
                src="{{ asset('games/' . $produk->kode_produk . '/' . $folderName . '/index.html') }}"
                width="90%"
                height="700px">
            </iframe>
        @else
            <p style="color: red;">❌ Tidak ditemukan folder game di dalam <strong>{{ $produk->kode_produk }}</strong></p>
        @endif

        <div style="margin-top: 30px;">
            <a href="{{ route('transaksi.library') }}" class="back-button">⬅️ Kembali ke Library</a>
        </div>
    </div>

</body>
</html>
