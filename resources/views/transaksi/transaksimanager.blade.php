@extends('admin.layout')

@section('title', 'Transaksi Manager')

@section('content')
<div class="pt-20">
    <div class="bg-gaming-card p-6 rounded-lg shadow-lg">
        <div class="flex justify-between items-center mb-6">
            <h2 class="text-2xl font-bold text-gaming-purple">Data Transaksi</h2>
        </div>
        @if(session('success'))
            <div class="mb-6 p-4 bg-gaming-blue rounded shadow hover-lift">
                <i class="fas fa-check-circle mr-2"></i> {{ session('success') }}
            </div>
        @endif

        <div class="overflow-x-auto">
            <table class="min-w-full table-auto border-collapse">
                <thead class="bg-gaming-dark">
                    <tr>
                        <th class="px-4 py-3 text-left text-gray-300">ID</th>
                        <th class="px-4 py-3 text-left text-gray-300">Gambar</th>
                        <th class="px-4 py-3 text-left text-gray-300">Nama Produk</th>
                        <th class="px-4 py-3 text-left text-gray-300">Produk ID</th>
                        <th class="px-4 py-3 text-left text-gray-300">User ID</th>
                        <th class="px-4 py-3 text-left text-gray-300">Harga</th>
                        <th class="px-4 py-3 text-left text-gray-300">Status</th>
                        <th class="px-4 py-3 text-left text-gray-300">Tanggal</th>
                        <th class="px-4 py-3 text-center text-gray-300">Aksi</th>
                    </tr>
                </thead>
                <tbody class="divide-y divide-gray-700">
                    @forelse($transaksis as $transaksi)
                        <tr class="hover:bg-gaming-hover transition">
                            <td class="px-4 py-3 text-white">{{ $transaksi->id }}</td>
                            <td class="px-4 py-3">
                                @if($transaksi->gambar)
                                    <img src="{{ asset('storage/' . $transaksi->gambar) }}"
                                         alt="{{ $transaksi->nama_produk }}"
                                         class="w-16 h-16 object-cover rounded">
                                @else
                                    <span class="text-gray-400">No Image</span>
                                @endif
                            </td>
                            <td class="px-4 py-3 text-white">{{ $transaksi->nama_produk }}</td>
                            <td class="px-4 py-3 text-white">{{ $transaksi->produk_id }}</td>
                            <td class="px-4 py-3 text-white">{{ $transaksi->user_id }}</td>
                            <td class="px-4 py-3 text-white">Rp {{ number_format($transaksi->harga, 0, ',', '.') }}</td>
                            <td class="px-4 py-3">
                                @php $st = strtolower($transaksi->status); @endphp
                                <span class="font-semibold {{ $st === 'selesai' ? 'text-green-500' : 'text-red-500' }}">
                                    {{ ucfirst($st) }}
                                </span>
                            </td>
                            <td class="px-4 py-3 text-white">
                                {{ $transaksi->created_at->format('d M Y, H:i') }}
                            </td>
                            <td class="px-4 py-3 text-center space-x-2">
                                @if($st === 'pending')
                                    <form action="{{ route('transaksi.batal', $transaksi->id) }}"
                                          method="POST"
                                          class="inline"
                                          onsubmit="return confirm('Yakin ingin membatalkan transaksi ini?')">
                                        @csrf
                                        <button type="submit"
                                                class="px-3 py-1 bg-gaming-purple rounded hover:bg-gaming-blue transition hover-lift">
                                            Batal
                                        </button>
                                    </form>
                                    <form action="{{ route('transaksi.konfirmasi', $transaksi->id) }}"
                                          method="POST"
                                          class="inline"
                                          onsubmit="return confirm('Yakin ingin mengkonfirmasi transaksi ini?')">
                                        @csrf
                                        <button type="submit"
                                                class="px-3 py-1 bg-gaming-blue rounded hover:bg-gaming-purple transition hover-lift">
                                            Konfirmasi
                                        </button>
                                    </form>
                                @elseif($st === 'selesai')
                                    <a href="{{ route('transaksi.cetak', $transaksi->id) }}"
                                       target="_blank"
                                       class="px-3 py-1 bg-gaming-blue rounded hover:bg-gaming-purple transition hover-lift"
                                       onclick="return confirm('Yakin ingin mencetak PDF transaksi ini?')">
                                        Cetak PDF
                                    </a>
                                @endif
                            </td>
                        </tr>
                    @empty
                        <tr>
                            <td colspan="9"
                                class="px-4 py-6 text-center text-gray-400">
                                Belum ada transaksi.
                            </td>
                        </tr>
                    @endforelse
                </tbody>
            </table>
        </div>
    </div>
</div>
@endsection