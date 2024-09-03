import React from 'react';
import PropTypes from 'prop-types';
import '../../css/components/DeleteButton.css';


import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export default function EditButton() {
  return (
  
    <button class="action-button rounded-md p-2 border-0 bg-red-600 animated-delete-button animated-delete-form " type="submit"
        onclick="return confirm('Are you sure you want to delete this feed?');">
     
        <FontAwesomeIcon icon={faTrashCan}  className='text-xl text-white'/>

    </button>
  )
}

EditButton.PropTypes ={
  className:PropTypes.string
}

EditButton.defaultProps ={
  className : '',

}
