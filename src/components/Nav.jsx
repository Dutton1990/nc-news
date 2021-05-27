import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getTopics } from '../utils/api';

const Nav = () => {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    getTopics().then((topicsFromApi) => {
      setTopics(topicsFromApi);
    });
  }, []);

  return (
        <>
      <nav class="column is-one-quarter menu">
    <p class="menu-label">
            TOPICS
        </p>
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
          
        })
      }
      </nav>
    
      </>
  );
};

export default Nav;
