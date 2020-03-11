import React from 'react';
import Header from './Header';

function About(props) {
  return (
    <div>
      {/* <Header
        storedUser={props.storedUser}
        setStoredUser={props.setStoredUser}
      /> */}
      <h1>About Page</h1>
      <p>My Image</p>
      <p>Bio of tech used to create & purpose behind it.</p>
      <p>Be on the look out for the next iteration!</p>
    </div>
  );
}

export default About;
