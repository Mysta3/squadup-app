import React from 'react';

function About(props) {
  return (
    <div className="aboutContainer">
      <div className="aboutPage">
        <h1>A Word From The Creator Of SquadUp!</h1>
        <img src="https://i.imgur.com/2Se3iD9m.jpg" alt="Creator of Squadup" />
        <div className='paragraphAbout'>
          <p>
            Hello and thank you so much for checking out my app! I hope you
            enjoyed your time here and most importantly found yourself a new
            SQUUUAD to game with! I created this with the purpose of wanting to
            increase the occurences of meeting new gamers who had the same
            schedules. I hope you enjoy!{' '}
          </p>
          <p>
            Be on the look out for many changes coming in the next few months!
          </p>
          <span> - Myshawne Stallings</span>
        </div>
      </div>
    </div>
  );
}

export default About;
