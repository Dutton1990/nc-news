import React from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../contexts/user';
import { useContext } from 'react';

const Header = () => {
  const user  = useContext(UserContext);
  return (
    <>
      <p>{`You are logged in as ${user.username}`}</p>

      <div>
        <h1>
          <Link to="/">
            NC-NEWS
          </Link>
        </h1>
      </div>
    </>
  );
};

export default Header;
