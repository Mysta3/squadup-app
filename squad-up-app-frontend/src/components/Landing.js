import React from 'react';
import { Link } from 'react-router-dom';
import '../css/styles.css';

function Landing() {
  return (
    <div className="landing-page">
      <div className='container'>
        <img src="../squadUp.png" alt="landing-pic" />
        <p>Welcome To Paradise Gamer!</p>
        <div>
          <Link to="/user/signup">
            <button>Enter</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Landing;
