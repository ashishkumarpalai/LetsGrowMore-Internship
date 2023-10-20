import React from 'react';

function Navbar({ getUsers }) {
  return (
    <nav>
      <div className="brand-name">See All User</div>
      <button className="get-users-button" onClick={getUsers}>
        Get Users
      </button>
    </nav>
  );
}

export default Navbar;
