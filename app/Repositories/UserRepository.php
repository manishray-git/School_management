<?php
namespace App\Repositories;
use App\Repositories\Interfaces\UserInterface;
use App\Models\User;

class UserRepository implements UserInterface {


    public function getAllUsers(){
        return User::all();
    }

}