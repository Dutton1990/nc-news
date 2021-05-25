import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { sortArticles } from '../utils/api'


const Sortby = ({ articles, setArticles }) => {
  const [sortby, setSortBy] = useState('show-all');
  const params = useParams();

  useEffect(() => {
    sortArticles(sortby).then(
      (articlesFromApi) => {
        setArticles(articlesFromApi);
      }
    );
  }, [sortby]);

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