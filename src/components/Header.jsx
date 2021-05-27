import React from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../contexts/user';
import { useContext } from 'react';

const Header = () => {
  const user = useContext(UserContext);
  return (
    // <div class="header">
    <>
    <section class="hero is-small is-primary">

      <p>{`You are logged in as ${user.username}`}</p>
    </section>

      <section class="hero is-info block">
        <div class="hero-body">
          <h1 class="title">
            <Link to="/">NC-NEWS</Link>
          </h1>
        </div>
      </section>
      </>
    // </div>
  );
};

export default Header;
