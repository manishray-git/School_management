<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\Usercontroller;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\SocialController;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});




Route::get('login/{provider}',[SocialController::class,'redirect'])->name('sociallogin');
Route::get('/data-deletion-status/{confirmation_code}', [SocialController::class, 'status']);
Route::get('login/{provider}/callback',[SocialController::class,'callback'])->name('social');


// //Google Login
// Route::get('/auth/google/redirect', [SocialController::class,'googleRedirect'])->name('googlelogin');

// //Google Login
// Route::get('/auth/google/callback', [SocialController::class,'handleGoogleCallback']);

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');




Route::group(['prefix'=>"dashboard"],function(){
    Route::controller(Usercontroller::class)->group(function(){
           Route::get('/users','index')->name('users.index');
           Route::post('/users/store','store')->name('users.store');
    });


});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
