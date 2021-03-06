import { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import classes from './Comments.module.css';
import NewCommentForm from './NewCommentForm';
import useHttp from '../../hooks/use-http';
import {getAllComments} from '../../lib/api';
import LoadingSpinner from '../UI/LoadingSpinner';
import CommentsList from './CommentsList';

const Comments = () => {
  const [isAddingComment, setIsAddingComment] = useState(false);
  const params = useParams();
  const { quoteId } = params;

  const {sendRequest, status, data: loadedComments } = useHttp(getAllComments);

  
  useEffect(() => {
    sendRequest(quoteId);
  }, [sendRequest, quoteId]);

  const onAddedComentHandler = useCallback(() => {
    sendRequest(quoteId);
  }, [quoteId, sendRequest]);
  
  let comments;

  if(status === 'pending') {
    comments = <div className='centered'>
      <LoadingSpinner />
    </div>
  }

  if(status === 'completed' && (loadedComments || loadedComments.length)) {
    comments = <CommentsList comments={loadedComments} />
  } 

  if(status === 'completed' && (!loadedComments || !loadedComments.length)) {
    <p className='centered'>No comments were added yet</p>
  }

  const startAddCommentHandler = () => {
    setIsAddingComment(true);
  };
  
  return (
    <section className={classes.comments}>
      <h2>User Comments</h2>
      {!isAddingComment && (
        <button className='btn' onClick={startAddCommentHandler}>
          Add a Comment
        </button>
      )}
      {isAddingComment && 
        <NewCommentForm 
          quoteId={quoteId} 
          onAddedComment={onAddedComentHandler} 
        />}
      {comments}
    </section>
  );
};

export default Comments;
