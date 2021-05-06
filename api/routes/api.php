<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PostController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('get_post_all',[PostController::class,'index']);
Route::post('create_post', [PostController::class, 'store']);

// Search
Route::get('get_post_all/{search}',[PostController::class,'search']);

// Filters
Route::get('get_post_day',[PostController::class,'day']);
Route::get('get_post_week',[PostController::class,'week']);
Route::get('get_post_month',[PostController::class,'month']);
Route::get('get_post_all_by_date', [PostController::class, 'bydate']);
Route::get('get_post_by_nedia/{search}',[PostController::class,'sourcemedia']);

