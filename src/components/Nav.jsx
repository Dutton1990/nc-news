import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getTopics } from '../utils/api';

const Nav = ({ isErr, setIsErr }) => {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    getTopics()
      .then((topicsFromApi) => {
        setTopics(topicsFromApi);
      })
      .catch((err) => {
        setIsErr(true);
      });
  }, [setIsErr]);

  if (isErr) return <p>There's been an error! Please try again :)</p>;

  return (
    <>
      <nav className="column is-narrow menu">
        <p className="menu-label">TOPICS</p>
        {topics.map((topic) => {
          return (
            <ul className="menu-label" key={topic.slug}>
              <li className="menu-list">
                <Link to={`/topics/${topic.slug}`}>
                  {topic.slug.toUpperCase()}
                </Link>
              </li>
            </ul>
          );
        })}
      </nav>
    </>
  );
};

export default Nav;
