import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getTopics } from '../utils/api';

const Nav = ({ isErr, setIsErr}) => {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    getTopics().then((topicsFromApi) => {
      setTopics(topicsFromApi);
    }).catch((err) => {
      setIsErr(true)
    });
  }, [setIsErr]);

  if (isErr) return <p>There's been an error! Please try again :)</p>

  return (
    <>
      <nav class="column is-narrow menu">
        <p class="menu-label">TOPICS</p>
        {topics.map((topic) => {
          return (
            <ul class="menu-label" key={topic.slug}>
              <li class="menu-list">
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
