<?php

use Illuminate\Support\Facades\Route;

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

Route::get('/', function () {
    return view('welcome');
});

Route::middleware(['auth:sanctum', 'verified'])->get('/dashboard', function () {
    return Inertia\Inertia::render('Dashboard');
})->name('dashboard');


Route::group(['middleware' =>'auth:sanctum','verified'],function(){
    Route::get('/logout',function (){
        \Illuminate\Support\Facades\Session::flush();
    });
});

Route::post('sign_up',[\App\Http\Controllers\UsersController::class,'register']);
Route::post('sign_in',[\App\Http\Controllers\UsersController::class,'login']);
Route::get('init',[\App\Http\Controllers\UsersController::class,'index']);

Route::get('/{any}',function (){
    return view('welcome');
});

