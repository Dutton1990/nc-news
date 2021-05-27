import { useState, useEffect } from 'react'
import { getArticles } from '../utils/api'
import { useParams } from 'react-router-dom'


const Sortby = ({ articles, setArticles }) => {
  const [sortOrder, setSortOrder] = useState('ASC');
  const [sortParam, setSortParam] = useState('created_at')
  const params = useParams();

  useEffect(() => {
    getArticles(params.topic, sortOrder, sortParam).then(
      (articlesFromApi) => {
        setArticles(articlesFromApi);
      }
    );
  }, [sortOrder, setArticles, params.topic, sortParam]);



    return (
      <>
        <form>
        <label>Sort by:</label>
        <select
          className="dropdown"
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
        
          <button onClick={() => setSortOrder('DESC')}>Descending</button>
          <button onClick={() => setSortOrder('ASC')}>Ascending</button>
       
        </>

    )

}

export default Sortby;