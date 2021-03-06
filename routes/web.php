<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

//cek route permission spatie

// Route::get('/admin', function () {
//     return 'halaman admin';
// })->middleware('role:admin');

// Route::get('/user', function () {
//     return 'halaman user';
// })->middleware('role:user|admin|superadmin');


////////////////////////////////////////////////////////////////////////////


Route::redirect('/', '/prototype/login');

Route::prefix('landing')->group(function () {
    Route::get('/', function () {
        return Inertia::render('Welcome/Landing');
    });
});


Route::prefix('prototype')->name('prototype.')->group(function () {
    Route::get('/login', function () {
        return Inertia::render('Prototype/Login');
    })->name('login');
    Route::get('/register', function () {
        return Inertia::render('Prototype/Register');
    })->name('register');


    Route::get('/landing', function () {
        return Inertia::render('Welcome/Landing');
    });

    Route::get('/dashboard', function () {
        return Inertia::render('Prototype/Dashboard');
    })->name('dashboard');
});

// Route::get('/', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

require __DIR__.'/auth.php';
