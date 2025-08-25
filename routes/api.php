<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

//controllers
use App\Http\Controllers\UserController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\CommentController;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

//User
Route::post('/users/store', [UserController::class,'store']);
Route::middleware('auth:sanctum')->group(function(){
    
    //users
    Route::get('/users', [UserController::class,'index']);
    Route::get('/users/{username}', [UserController::class,'show']);
    Route::put('/users/{id}/update', [UserController::class,'update']);
    Route::delete('/users/{id}/destroy', [UserController::class,'destroy']);

    //posts
    Route::post('/posts',[PostController::class,'store']);
    Route::get('/posts',[PostController::class,'index']);
    Route::get('/posts/{id}',[PostController::class,'show']);

    //Comments
    Route::post('/comments/{id}', [CommentController::class,'store']);
    Route::get('/comments', [CommentController::class,'index']);
});

//Auth
Route::post('auth/login',[AuthController::class,'login']);
Route::post('auth/logout',[AuthController::class,'logout']);


