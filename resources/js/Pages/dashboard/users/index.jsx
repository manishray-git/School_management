import React, { useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import Table from "@/Components/Table";
import AddButton from "@/Components/AddButton";

export default function index(users) {
    const [usersList, setUsers] = useState(users.users);
    const columns = ["name", "email"];

    return (
        <div>
            <AuthenticatedLayout
                header={
                    <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                        Dashboard
                    </h2>
                }
            >
                <Head title="Dashboard" />

                <div className=" w-screen p-10  h-screen ">
                    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8  bg-white ml-10 p-4 rounded-md mt-20 flex flex-col space-y-2">
                        <div className=" flex justify-end px-10">
                            <AddButton
                                label="Add User"
                                iconClass="fas fa-user-plus mr-2"
                                className="custom-class "
                                route="/add-user"
                            />
                        </div>

                        <Table data={usersList} columns={columns}></Table>
                    </div>
                </div>
            </AuthenticatedLayout>
        </div>
    );
}
