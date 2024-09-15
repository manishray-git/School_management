import React from "react";
import AddButton from "./AddButton";
import EditButton from "./EditButton";
import DeleteButton from "../Components/DeleteButton";
import propTypes from "prop-types";

export default function Table({ data, columns }) {
    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg p-2">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        {columns.map((column, index) => (
                            <th scope="col" key={index} className="px-6 py-3">
                                {column}
                            </th>
                        ))}

                        <th scope="col" className="px-6 py-3">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, rowIndex) => (
                        <tr key={rowIndex} className="text-black border">
                            {columns.map((column, colIndex) => (
                                <td className="p-2" key={colIndex}> {row[column]}</td>
                            ))}

                            <td className="px-6 py-4 text-black">
                                <div className="flex space-x-4">
                                    <EditButton />
                                    <DeleteButton />
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

Table.propTypes = {
    data: propTypes.array,
};

