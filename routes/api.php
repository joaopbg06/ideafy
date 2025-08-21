<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

//controllers
use App\Http\Controllers\UserController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\PostController;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

//User
Route::post('/users/store', [UserController::class,'store']);
Route::middleware('auth:sanctum')->group(function(){
    
    Route::get('/users/{id}/', [UserController::class,'index']);
    Route::put('/users/{id}/update', [UserController::class,'update']);
    Route::delete('/users/{id}/destroy', [UserController::class,'destroy']);

    Route::post('/posts',[PostController::class,'store']);
});

//Auth
Route::post('auth/login',[AuthController::class,'login']);
Route::post('auth/logout',[AuthController::class,'logout']);


