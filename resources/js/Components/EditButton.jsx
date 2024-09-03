import React from "react";
import PropTypes from "prop-types";
import '../../css/components/EditButton.css';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



export default function EditButton() {
    return (
        <div class="" data-id="">
            <a
                href="javascript:void(0)"
                class="action-button p-1  show ml-2 bg-blue-600 animated-edit-button rounded-md"
            >
                <FontAwesomeIcon icon={faPenToSquare}  className="text-white p-1  text-xl "/>
            
            </a>
        </div>
    );
}

EditButton.prototype = {
    className: PropTypes.string,
    route:PropTypes.string
}


EditButton.defaultProps ={
    className : '',
    route: '#'
}

