import React from 'react';

function Header() {
  return (
    <div className="navBar">
      <header>
        <nav>
          <a href="/squadup/home">Home</a><a href="/squadup/about">About</a>
          <a href="/squadup/posts/new">New Post</a>
          <a href="/user/signup">Sign Up</a>
          <a href="/user/login">Login</a>
        </nav>
      </header>
    </div>
  );
}

export default Header;
