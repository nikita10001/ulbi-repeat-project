import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <div className="header__conainer">
        <a href="" className="header__logo">
          PostsService
        </a>
        <div className="header__actions">
          <p>User</p>
          <div>Login</div>
        </div>
      </div>
    </header>
  );
};

export default Header;
