<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class KategoriSeeder extends Seeder
{
    public function run()
    {
        $kategoris = [
            ['nama' => 'Platformer'],
            ['nama' => 'Sokoban'],
            ['nama' => 'Pairs'],
            ['nama' => 'Puzzle'],
            ['nama' => 'Adventure'],
            ['nama' => 'Strategy'],
            ['nama' => 'RPG'],
            ['nama' => 'Arcade'],
            ['nama' => 'Shooter'],
            ['nama' => 'Simulation'],
        ];

        DB::table('kategoris')->insert($kategoris);
    }
}
