import React from "react";
import propTypes from "prop-types";
import '../../css/components/EditButton.css';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



export default function EditButton() {
    return (
        <div className="" data-id="">
            <a
                href=""
                className="action-button p-1  show ml-2 bg-blue-600 animated-edit-button rounded-md"
            >
                <FontAwesomeIcon icon={faPenToSquare}  className="text-white p-1  "/>
            
            </a>
        </div>
    );
}

EditButton.prototype = {
    className: propTypes.string,
    route:propTypes.string
}



