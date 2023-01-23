<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class MovieController extends Controller
{

    public function index()
    {
        $moviePop  = Http::withToken(config('services.tmdb.token'))->get(config('services.tmdb.url') . '/movie/popular')->json();

        return Inertia::render('Homepage', [
            'title' => 'Cinema 212',
            'desc' => 'Ini deskripsi mantap sekali',
            'movie_popular' => $moviePop
        ]);
    }
}
