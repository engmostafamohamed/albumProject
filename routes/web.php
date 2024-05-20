<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AlbumController;

// Route::get('/', function () {
//     // return view('welcome');
// });
Route::get('/', [AlbumController::class,'index'])->name('albums');
