<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Cart extends Model
{
    protected $fillable = [
    'user_id', 'produk_id', 'nama_produk', 'gambar', 'harga', 'status',
];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function produk()
{
    return $this->belongsTo(Produk::class, 'produk_id');
}
}
