<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\AuthRequest;
use App\Models\UserModel;
use Laravel\Sanctum\PersonalAccessToken;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
   public function login(AuthRequest $request)
   {
        $data = $request->all();

        if(Auth::attempt($data) )
        {
            $user = UserModel::where('email',$data['email'])->first();

            $token = $this->generateToken($user);

            return response()->json([
                'token:'=> $token
            ],200);
        }

        return response()->json("Invalid credentials");

        

   }

   public function logout(Request $request)
   {
      $token = $request->bearerToken();

      if(!$token)
      {
          return response()->json([
            'token not declared'
        ],400);
      }

      $access_token = PersonalAccessToken::findToken($token);

       if(!$access_token)
      {
          return response()->json([
            'invalid token'
        ],400);
      }
      
      $access_token->delete();

      return response()->json(['logout succesfully'],200);
   }

   private function generateToken($user)
   {
        return  $user->createToken('api-token')->plainTextToken;
   }
}
