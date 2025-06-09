<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Mainkan Game - {{ $produk->nama }}</title>
</head>
<body style="background-color: #000; color: #fff; text-align: center; padding: 20px;">
    <h1>Anda sedang memainkan: {{ $produk->nama }}</h1>
    <p>ID Game: {{ $produk->id }}</p>

    @php
        $extractPath = public_path('games/' . $produk->kode_produk);
        $folders = array_filter(glob($extractPath . '/*'), 'is_dir');
        $folderName = count($folders) > 0 ? basename(reset($folders)) : null;
    @endphp

    @if($folderName)
        <iframe
            src="{{ asset('games/' . $produk->kode_produk . '/' . $folderName . '/index.html') }}"
            width="100%"
            height="800px"
            frameborder="0"
            style="margin-top: 20px;">
        </iframe>
    @else
        <p style="color: red;">Tidak ditemukan folder game di dalam {{ $produk->kode_produk }}</p>
    @endif

    <p style="margin-top: 20px;">
        <a href="{{ route('admin.home') }}" style="color: yellow; text-decoration: underline;">Kembali ke Dashboard</a>
    </p>
</body>
</html>
