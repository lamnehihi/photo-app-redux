import React from 'react';
import PropTypes from 'prop-types';
import Banner from 'components/Banner';
import images from 'Constants/image';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase';
import "./Signin.scss";

Signin.propTypes = {
  
};

function Signin(props) {
  // Configure FirebaseUI.
  const uiConfig = {
    // Popup signin flow rather than redirect flow.
    signInFlow: 'redirect',
    signInSuccessUrl: '/photos',
    // We will display Google and Facebook as auth providers.
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID
    ],
  };

  return (
    <div>
      <Banner title="🥳 Become one of us 🥳" backgroundUrl={images.SIGNIN_BG} />

      <div className='text-center sign-in'>
        <h2>Login Form</h2>
        <p>or login with social account</p>
        <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()}/>
      </div>
    </div>
  );
}

export default Signin;