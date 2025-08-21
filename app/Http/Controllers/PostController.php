<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\PostRequest;

class PostController extends Controller
{
    public function index()
    {

    }

    public function store(PostRequest $request)
    {
        $data = $request->all();

    }

    public function update()
    {

    }

    public function destroy()
    {

    }

    public function show()
    {

    }
}
