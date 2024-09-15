import React from 'react';
import propTypes from 'prop-types';
import  '../../css/components/AddButton.css'
import { Link } from '@inertiajs/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';


 function AddButton({ label, iconClass, className, route }) {
    return (
      
            <div 
            className={`add-user-container  ${className}`}
              data-modal-target="crud-modal"
              data-modal-toggle="crud-modal"
            >
                <button className="add-user-button ">
                <FontAwesomeIcon icon={faUser}   className={iconClass} /> {label}                
                </button>
            </div>
       
    );

}

AddButton.propTypes = {
    label: propTypes.string,
    iconClass: propTypes.string,
    className: propTypes.string,
    route: propTypes.string,
};


export default AddButton;