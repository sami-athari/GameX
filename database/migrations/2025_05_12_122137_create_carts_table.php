<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('carts', function (Blueprint $table) {
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

            // Snapshot data produk
            $table->string('nama_produk');   // Nama produk pada saat dimasukkan ke cart
            $table->string('gambar')->nullable(); // Path gambar cover

            // Harga pada saat dimasukkan ke cart
            $table->decimal('harga', 10, 2);

            $table->string('status')->default('pending'); // Misal: pending, purchased, cancelled

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('carts');
    }
};
