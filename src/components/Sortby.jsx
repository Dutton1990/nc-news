import { useState, useEffect } from 'react'
import { sortArticles } from '../utils/api'


const Sortby = ({ articles, setArticles }) => {
  const [sortby, setSortBy] = useState('show-all');

  useEffect(() => {
    sortArticles(sortby).then(
      (articlesFromApi) => {
        setArticles(articlesFromApi);
      }
    );
  }, [sortby, setArticles]);

    return (
        <form>
        <label>Sort by:</label>
        <select
          className="dropdown"
          value={sortby}
          onChange={(event) => {
              console.log(event.target.value)
            setSortBy(event.target.value);
          }}
        >
          <option value="show-all">Show all</option>
          <option value="title">Title</option>
          <option value="created_at">Created At</option>
        </select>
        </form> 


    )

}

export default Sortby;