<?php

namespace App\Http\Controllers;
use Inertia\Inertia;
use App\Repositories\Interfaces\UserInterface;
use Illuminate\Http\Request;

class Usercontroller extends Controller
{
    
    protected $userRepository;


    public function __construct(UserInterface $repository){
        $this->userRepository = $repository;
    }

    public function index(){

       $users =  $this->userRepository->getAllUsers();
        return Inertia::render('dashboard/users/index',[
            'users'=>$users
        ]);
    }


    
}
