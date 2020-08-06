import React from 'react';
import PropTypes from 'prop-types';
import './AddEdit.scss';
import Banner from 'components/Banner';
import PhotoForm from 'features/Photo/components/PhotoForm';

AddEditPage.propTypes = {
  
};

function AddEditPage(props) {
  return (
    <div className="photo-edit">
      <Banner title="Pick your amazing Photos 😎" />

      <div className="photo-edit__form">
        <PhotoForm />
      </div>
    
    </div>
   );
}

export default AddEditPage;