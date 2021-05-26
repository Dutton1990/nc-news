import { useState, useEffect } from 'react';
import { getCommentsByArticleId } from '../utils/api';
import { useParams } from 'react-router-dom'

const useComments = () => {
  const [comments, setComments] = useState([]);
  const params = useParams();

  useEffect(() => {
    getCommentsByArticleId(params.article_id).then((commentsFromApi) => {
      setComments(commentsFromApi);
    });
  }, [params.article_id]);

  return { comments, setComments };
};

export default useComments;
