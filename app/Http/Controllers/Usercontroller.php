<?php

namespace App\Http\Controllers;
use Inertia\Inertia;
use App\Repositories\Interfaces\UserInterface;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Log;

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


    public function store(Request $request){
        
        Validator::make($request->all(),[

            'name'=>'required',
            'email'=>'required|email|unique:users,email',
            'password'=>'required'
        ],[
           'name.required'=>"Name is required",
           'email.required'=>"Email is required",
           'password.required'=>"Password is required"
        ])->validate();


        try {
         
            User::create($request->only(['name', 'email', 'password']));
        return redirect('/dashboard/users')->with('message','User Added Successfully');
        } catch (\Throwable $th) {
            dd($th);
            return redirect()->back()->with('error', 'An error occurred while adding the user');
        }


       
    }


    
}
