<?php

namespace App\Http\Controllers;

use App\Models\Produk;

class BerandaControllers extends Controller
{
    public function index() {
    $produks = Produk::latest()->get();
    return view('welcome', compact('produks'));
}


}
