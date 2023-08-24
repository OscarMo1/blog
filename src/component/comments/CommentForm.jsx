import React from 'react'

const CommentForm = () => {
    const submitHandler = (e) => {
        e.preventDefault();
    }
  return <form onSubmit={submitHandler}>
    <div></div>
  </form>;
};

export default CommentForm
