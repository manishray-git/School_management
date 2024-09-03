<?php

namespace App\Http\Controllers;

use Exception;
use Illuminate\Http\Request;
use Laravel\Socialite\Facades\Socialite;
class SocialController extends Controller
{
    public function redirect($provider){
        try {
            return Socialite::driver($provider)->redirect();
        } catch (\Throwable $th) {
           return dd($th);
        }
    }


    public function status($confirmation_code){
        // Check the status of the deletion request based on the confirmation code
    // Return a human-readable explanation

    return response()->json([
        'status' => 'Deletion request processed',
        'confirmation_code' => $confirmation_code
    ]);
    }



    public function googleRedirect(){
        
        return Socialite::driver('google')->redirect();
    }


    public function handleGoogleCallback(){
        $user = Socialite::driver('google')->user();

        try {
            //code...
        } catch (Exception $th) {
            //throw $th;
        }
    }
}
