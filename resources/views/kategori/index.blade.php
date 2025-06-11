@extends('admin.layout')

@section('title', 'Daftar Kategori')

@section('content')
<div class="pt-16">
<div class="bg-gaming-card p-6 rounded-lg shadow-lg">
    <div class="flex justify-between items-center mb-6">
        <h2 class="text-2xl font-bold text-gaming-red-600">Daftar Kategori</h2>
        <a href="{{ route('kategori.create') }}" class="bg-gaming-red-600 text-white px-4 py-2 rounded-lg hover:bg-gaming-red-500 transition duration-300">Tambah Kategori</a>
    </div>
    <div class="overflow-x-auto">
        <table class="w-full text-left">
            <thead class="bg-gaming-dark">
                <tr>
                    <th class="p-3 text-gray-300">Nama Kategori</th>
                    <th class="p-3 text-gray-300">Aksi</th>
                </tr>
            </thead>
            <tbody>
                @foreach ($kategoris as $kategori)
                    <tr class="border-b border-gray-700 hover:bg-gaming-hover">
                        <td class="p-3">{{ $kategori->nama }}</td>
                        <td class="p-3 flex space-x-2">
                            <a href="{{ route('kategori.edit', $kategori->id) }}" class="bg-yellow-500 text-white px-3 py-1 rounded-lg hover:bg-yellow-400 transition duration-300">Edit</a>
                            <form action="{{ route('kategori.destroy', $kategori->id) }}" method="POST" class="inline">
                                @csrf
                                @method('DELETE')
                                <button type="submit" class="bg-gaming-red-600 text-white px-3 py-1 rounded-lg hover:bg-gaming-red-500 transition duration-300" onclick="return confirm('Yakin ingin hapus?')">Hapus</button>
                            </form>
                        </td>
                    </tr>
                @endforeach
            </tbody>
        </table>
    </div>
</div>
@endsection
