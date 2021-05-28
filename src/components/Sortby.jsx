import { useState, useEffect } from 'react';
import { getArticles } from '../utils/api';
import { useParams } from 'react-router-dom';

const Sortby = ({ articles, setArticles }) => {
  const [sortOrder, setSortOrder] = useState('ASC');
  const [sortParam, setSortParam] = useState('created_at');
  const params = useParams();

  useEffect(() => {
    getArticles(params.topic, sortOrder, sortParam).then((articlesFromApi) => {
      setArticles(articlesFromApi);
    });
  }, [sortOrder, setArticles, params.topic, sortParam]);

  return (
    <>
      <div className="block is-align-items-start">
        <form className="select">
          <select
            value={sortParam}
            onChange={(event) => {
              setSortParam(event.target.value);
            }}
          >
            <option value="title">Title</option>
            <option value="created_at">Created At</option>
            <option value="votes">Votes</option>
            <option value="comment_count">Comment count</option>
          </select>
        </form>
      </div>
      <div className="block">
        <button
          className="button is-link is-light is-small"
          onClick={() => setSortOrder('ASC')}
        >
          Ascending
        </button>
        <button
          className="button is-link is-light is-small"
          onClick={() => setSortOrder('DESC')}
        >
          Descending
        </button>
      </div>
    </>
  );
};

export default Sortby;
