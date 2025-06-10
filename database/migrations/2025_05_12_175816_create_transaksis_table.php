<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        Schema::create('transaksis', function (Blueprint $table) {
            $table->id();

            // Relasi ke user
            $table->unsignedBigInteger('user_id');
            $table->foreign('user_id')
                  ->references('id')->on('users')
                  ->onDelete('cascade');

            // Relasi ke produk
            $table->unsignedBigInteger('produk_id');
            $table->foreign('produk_id')
                  ->references('id')->on('produks')
                  ->onDelete('cascade');

            // Snapshot data produk pada saat transaksi:
            $table->string('nama_produk');    // Nama produk
            $table->string('gambar')->nullable(); // Path gambar (storage)

            // Harga pada saat beli (bisa decimal sesuai produk)
            $table->decimal('harga', 10, 2);

            // Status transaksi (misal: pending, completed, cancelled)
            $table->string('status')->default('pending');

            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('transaksis');
    }
};
