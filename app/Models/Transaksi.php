<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Transaksi extends Model
{
    // use HasFactory;

    protected $fillable = [
  'user_id', 'produk_id','nama_produk', 'gambar', 'harga', 'status'
];

    // Transaksi.php
    public function produk()
    {
        return $this->belongsTo(Produk::class, 'produk_id');
    }



    public function transaksi()
    {
        return $this->belongsTo(Transaksi::class);
    }

}
