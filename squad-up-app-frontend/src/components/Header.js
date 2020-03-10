import React from 'react';

function Header(props) {
  console.log(props);
  const resetStoredName = () => {
    localStorage.clear();
    props.setStoredUser();
  };

  return (
    <div className="navBar">
      <header>
        <nav>
          <a href="/squadup/home">Home</a>
          <a href="/squadup/about">About</a>
          <a href="/squadup/posts/new">New Post</a>
          {props.storedUser && (
            <button onClick={resetStoredName}> Logout</button>
          )}
          {!props.storedUser && <a href="/user/login">Login</a>}
        </nav>
      </header>
    </div>
  );
}

export default Header;
