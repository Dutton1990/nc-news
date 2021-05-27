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
    
      <nav class="column">
        {topics.map((topic) => {
          return (
            <ul key={topic.slug}>
              <li>
                <Link to={`/topics/${topic.slug}`}>
                  {topic.slug.toUpperCase()}
                </Link>
              </li>
            </ul>
          );
        })}
      </nav>
    
  );
};

export default Nav;
