import React from 'react';
import PropTypes from 'prop-types';
import { Container } from 'reactstrap';
import { Link } from 'react-router-dom';
import Banner from 'components/Banner';
import images from 'Constants/image';

MainPage.propTypes = {
  
};

function MainPage(props) {
  return (
    <div className="photo-main">
      <Banner title="Your awesome photos 😍" backgroundUrl={images.PINK_BG}/>
    
      <Container className="text-center">
        <Link to="/photos/add">add new photo</Link>
      </Container>

    </div>
  );
}

export default MainPage;