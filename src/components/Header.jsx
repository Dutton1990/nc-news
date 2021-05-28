import React from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../contexts/user';
import { useContext } from 'react';

const Header = () => {
  const user = useContext(UserContext);
  return (
    
    <>
    <section className="hero is-small is-primary">

      <p>{`You are logged in as ${user.username}`}</p>
    </section>

      <section className="hero is-info block">
        <div className="hero-body">
          <h1 className="title">
            <Link to="/">NC-NEWS</Link>
          </h1>
        </div>
      </section>
      </>
    
  );
};

export default Header;
