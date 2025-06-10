@extends('admin.layout')

@section('title', 'Edit Kategori')

@section('content')
<div class="bg-gaming-card p-6 rounded-lg shadow-lg">
    <h2 class="text-2xl font-bold mb-6 text-gaming-red-600">Edit Kategori</h2>
    @if ($errors->any())
        <div class="bg-red-500 text-white p-4 rounded-lg mb-4">
            <ul class="list-disc pl-5">
                @foreach ($errors->all() as $error)
                    <li>{{ $error }}</li>
                @endforeach
            </ul>
        </div>
    @endif
    <form action="{{ route('kategori.update', $kategori->id) }}" method="POST" class="space-y-4">
        @csrf
        @method('PUT')
        <div class="flex flex-col">
            <label for="nama" class="text-gray-300 mb-1">Nama Kategori</label>
            <input type="text" name="nama" class="bg-gaming-dark text-white border border-gray-700 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-gaming-red-600" value="{{ $kategori->nama }}" required>
        </div>
        <div class="flex space-x-4">
            <button type="submit" class="bg-gaming-red-600 text-white px-4 py-2 rounded-lg hover:bg-gaming-red-500 transition duration-300">Update</button>
            <a href="{{ route('kategori.index') }}" class="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-500 transition duration-300">Batal</a>
        </div>
    </form>
</div>
@endsection
