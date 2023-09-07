import React, { useState, useEffect } from 'react'
import { getCommentsData } from '../../data/comments';
import CommentForm from './CommentForm'
import Comment from './comment';

<<<<<<< HEAD
const CommentsContainer = ({className, logginedUserId}) => {
=======
const CommentsContainer = ({className}) => {
>>>>>>> parent of db5982c (commments)
  const [comments, setComments] = useState([]);
  const mainComments = comments.filter((comment) => comment.parent === null);

  console.log(comments);
  useEffect(() => {
    (async()=>{
        const commentData = await getCommentsData();
        setComments(commentData);
    })();
  },[]);

  const addCommentHandler = (value, parent = null, replyOnUser = null) =>{
    const newComment = {
        _id: "10",
        user: {
          _id: "a",
          name: "Mohammad Rezaii",
        },
        desc: value,
        post: "1",
        parent: parent,
        replyOnUser: replyOnUser,
        createdAt: "2022-12-31T17:22:05.092+0000",
    };
    setComments((curState)=>{
        return [newComment, ...curState];
    });
  };

  return (
    <div className={`${className}`}>
      <CommentForm btnLabel="Send" formSubmitHandler={(value) => addCommentHandler(value)}/>
      <div className="space-y-4 mt-8">
        {mainComments.map((comment)=>(
<<<<<<< HEAD
            <Comment 
              comment={comment} 
              logginedUserId={logginedUserId} 
              affectedComment={affectedComment} 
              setAffectedComment={setAffectedComment}
              addComment={addCommentHandler}/>
=======
            <Comment comment={comment}/>
>>>>>>> parent of db5982c (commments)
        ))}
      </div>
    </div>
  )
}

export default CommentsContainer
