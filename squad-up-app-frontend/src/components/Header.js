import React from 'react';

function Header(props) {
  const resetStoredName = () => {
    localStorage.clear();
    props.setStoredUser();
  };
  const logged_in_nav = (
      <header>
        <nav>
          <a href="/squadup/home">Home</a>
          <a href="/squadup/about">About</a>
          <a href="/squadup/posts/new">New Post</a>
          <button onClick={resetStoredName}> Logout</button>
        </nav>
      </header>
  );

  const logged_out_nav = (
      <header>
        <nav>
          <a href="/squadup/home">Home</a>
          <a href="/squadup/about">About</a>
          <a href="/user/signup">Sign Up</a>
          <a href="/user/login">Login</a>
        </nav>
      </header>
  );

  return (
    <div className="navBar">
      {' '}
      {props.storedUser ? logged_in_nav : logged_out_nav}
    </div>
  );
}

export default Header;
