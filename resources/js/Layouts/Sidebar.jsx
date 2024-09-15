import React from "react";
import { Link, Head } from "@inertiajs/react";
import '../../css/app.css';

export default function Sidebar() {

   


      window.onclick = function (event){

   
        if(!event.target.matches('.dropbtn')){
            var dropdowns = document.getElementsByClassName("dropdown-content");
            var i;
            for (i = 0; i < dropdowns.length; i++) {
              var openDropdown = dropdowns[i];
              if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
              }
            }
        }
    }
    return (
        <div className="relative flex h-screen w-full max-w-[20rem] flex-col rounded-xl bg-white bg-clip-border p-4 text-gray-700 shadow-xl shadow-blue-gray-900/5">
            <div className="p-4 mb-2">
                <h5 className="block font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                    E-School
                </h5>
            </div>
            <nav className="flex min-w-[240px] flex-col gap-1 p-2 font-sans text-base font-normal text-blue-gray-700">
                <div className="relative block w-full">
                    <div
                        role="button"
                        onClick={()=>{
                            document.getElementById('dropdownone').classList.toggle("show");
                        }}
                        className="flex items-center w-full p-0  leading-tight bg-blue-600 text-white transition-all rounded-lg outline-none bg-blue-gray-50/50 text-start text-blue-gray-700 hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
                    >
                        <button
                            type="button"
                            className="flex dropbtn items-center justify-between w-full p-3 font-sans text-xl antialiased font-semibold leading-snug text-left transition-colors border-b-0 select-none border-b-blue-gray-100 text-blue-gray-900 hover:text-blue-gray-900"
                        >
                            <div className="grid dropbtn mr-4 place-items-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    aria-hidden="true"
                                    className="w-5 h-5 dropbtn"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M2.25 2.25a.75.75 0 000 1.5H3v10.5a3 3 0 003 3h1.21l-1.172 3.513a.75.75 0 001.424.474l.329-.987h8.418l.33.987a.75.75 0 001.422-.474l-1.17-3.513H18a3 3 0 003-3V3.75h.75a.75.75 0 000-1.5H2.25zm6.04 16.5l.5-1.5h6.42l.5 1.5H8.29zm7.46-12a.75.75 0 00-1.5 0v6a.75.75 0 001.5 0v-6zm-3 2.25a.75.75 0 00-1.5 0v3.75a.75.75 0 001.5 0V9zm-3 2.25a.75.75 0 00-1.5 0v1.5a.75.75 0 001.5 0v-1.5z"
                                        clipRule="evenodd"
                                    ></path>
                                </svg>
                            </div>
                            <p className="block dropbtn mr-auto font-sans text-base antialiased font-normal leading-relaxed text-blue-gray-900">
                                Dashboard
                            </p>
                            <span className="ml-4">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="2.5"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                    className="w-4 h-4 mx-auto transition-transform rotate-180"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                    ></path>
                                </svg>
                            </span>
                        </button>
                    </div>
                    <div className="overflow-hidden  hidden dropdown-content" id="dropdownone">
                        <div className="block w-full py-1 font-sans text-sm antialiased font-light leading-normal text-gray-700">
                            <nav className="flex min-w-[240px] flex-col gap-1 p-0 font-sans text-base font-normal text-blue-gray-700">
                                <div
                                    role="button"
                                    className="flex items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
                                >
                                    <div className="grid mr-4 place-items-center">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="3"
                                            stroke="currentColor"
                                            aria-hidden="true"
                                            className="w-5 h-3"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M8.25 4.5l7.5 7.5-7.5 7.5"
                                            ></path>
                                        </svg>
                                    </div>
                                    Analytics
                                </div>
                                <div
                                    role="button"
                                    className="flex items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
                                >
                                    <div className="grid mr-4 place-items-center">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="3"
                                            stroke="currentColor"
                                            aria-hidden="true"
                                            className="w-5 h-3"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M8.25 4.5l7.5 7.5-7.5 7.5"
                                            ></path>
                                        </svg>
                                    </div>
                                    Reporting
                                </div>
                                <div
                                    role="button"
                                    className="flex items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
                                >
                                    <div className="grid mr-4 place-items-center">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="3"
                                            stroke="currentColor"
                                            aria-hidden="true"
                                            className="w-5 h-3"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M8.25 4.5l7.5 7.5-7.5 7.5"
                                            ></path>
                                        </svg>
                                    </div>
                                    Projects
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>





                <div className="relative block w-full">
                    <div
                        role="button"
                        onClick={()=>{
                            document.getElementById('dropdowntwo').classList.toggle("show");
                        }}
                        className="flex items-center w-full p-0  leading-tight  transition-all rounded-lg outline-none bg-blue-gray-50/50 text-start text-blue-gray-700 hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
                    >
                        <button
                            type="button"
                            className="flex dropbtn items-center justify-between w-full p-3 font-sans text-xl antialiased font-semibold leading-snug text-left transition-colors border-b-0 select-none border-b-blue-gray-100 text-blue-gray-900 hover:text-blue-gray-900"
                        >
                            <div className="grid dropbtn mr-4 place-items-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    aria-hidden="true"
                                    className="w-5 h-5 dropbtn"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M2.25 2.25a.75.75 0 000 1.5H3v10.5a3 3 0 003 3h1.21l-1.172 3.513a.75.75 0 001.424.474l.329-.987h8.418l.33.987a.75.75 0 001.422-.474l-1.17-3.513H18a3 3 0 003-3V3.75h.75a.75.75 0 000-1.5H2.25zm6.04 16.5l.5-1.5h6.42l.5 1.5H8.29zm7.46-12a.75.75 0 00-1.5 0v6a.75.75 0 001.5 0v-6zm-3 2.25a.75.75 0 00-1.5 0v3.75a.75.75 0 001.5 0V9zm-3 2.25a.75.75 0 00-1.5 0v1.5a.75.75 0 001.5 0v-1.5z"
                                        clipRule="evenodd"
                                    ></path>
                                </svg>
                            </div>
                            <p className="block dropbtn mr-auto font-sans text-base antialiased font-normal leading-relaxed text-blue-gray-900">
                                Users
                            </p>
                            <span className="ml-4">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="2.5"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                    className="w-4 h-4 mx-auto transition-transform rotate-180"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                    ></path>
                                </svg>
                            </span>
                        </button>
                    </div>
                    <div className="overflow-hidden  hidden dropdown-content" id="dropdowntwo">
                        <div className="block w-full py-1 font-sans text-sm antialiased font-light leading-normal text-gray-700">
                            <nav className="flex min-w-[240px] flex-col gap-1 p-0 font-sans text-base font-normal text-blue-gray-700">
                                <Link href="/dashboard/users">
                                <div
                                    role="button"
                                    className="flex items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
                                >
                                    <div className="grid mr-4 place-items-center">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="3"
                                            stroke="currentColor"
                                            aria-hidden="true"
                                            className="w-5 h-3"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M8.25 4.5l7.5 7.5-7.5 7.5"
                                            ></path>
                                        </svg>
                                    </div>
                                    Users
                                </div>
                                </Link>

                                <div
                                    role="button"
                                    className="flex items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
                                >
                                    <div className="grid mr-4 place-items-center">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="3"
                                            stroke="currentColor"
                                            aria-hidden="true"
                                            className="w-5 h-3"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M8.25 4.5l7.5 7.5-7.5 7.5"
                                            ></path>
                                        </svg>
                                    </div>
                                    Roles
                                </div>
                                <div
                                    role="button"
                                    className="flex items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
                                >
                                    <div className="grid mr-4 place-items-center">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="3"
                                            stroke="currentColor"
                                            aria-hidden="true"
                                            className="w-5 h-3"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M8.25 4.5l7.5 7.5-7.5 7.5"
                                            ></path>
                                        </svg>
                                    </div>
                                    Permissions
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>







           
            </nav>
        </div>
    );
}
