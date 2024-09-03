import React from 'react';
import PropTypes from 'prop-types';
import  '../../css/components/AddButton.css'
import { Link } from '@inertiajs/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

 function AddButton({ label, iconClass, className, route }) {
    return (
        <Link href={route}>
            <div className={`add-user-container  ${className}`}>
                <button className="add-user-button ">
                <FontAwesomeIcon icon={faUser}   className={iconClass} /> {label}                
                </button>
            </div>
        </Link>
    );

}

AddButton.propTypes = {
    label: PropTypes.string,
    iconClass: PropTypes.string,
    className: PropTypes.string,
    route: PropTypes.string,
};

AddButton.defaultProps = {
    label: '',
    iconClass: '',
    className: '',
    route: '#',
};


export default AddButton;