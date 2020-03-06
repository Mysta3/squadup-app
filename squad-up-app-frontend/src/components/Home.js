import React from 'react';
import Header from './Header';
import Post from './Post';

function Home() {
  return (
    <div className="home-page">
      <Header />
      <main>
        <div className="hero-image">
          <div className='banner'>
            <p>Find Your Squad!</p>
          </div>
        </div>

        <Post />
      </main>
    </div>
  );
}

export default Home;
