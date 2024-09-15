import React from 'react';
import propTypes from 'prop-types';
import '../../css/components/DeleteButton.css';


import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export default function EditButton() {
  return (
  
    <button className="action-button rounded-md p-2 border-0 bg-red-600 animated-delete-button animated-delete-form " type="submit"
     >
     
        <FontAwesomeIcon icon={faTrashCan}  className=' text-white'/>

    </button>
  )
}

EditButton.propTypes ={
  className:propTypes.string
}

