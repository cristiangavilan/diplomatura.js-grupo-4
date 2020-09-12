import React, { useState } from 'react';
import { IComment, IMemeComment } from 'memegram-commons/models/Comment.model';
import { useAppState } from '../state';

interface IMemeCommentProps {
  comments: IMemeComment[];
}

export const AddComment = ({ comments }: IMemeCommentProps) => {
  const state = useAppState();
  const [comment, setComment] = useState('');

  const onChangeComment = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setComment(event ? event?.target.value : '');
  };

  const onSave = (comment: IMemeComment) => {
    // return comments.push(comment);
  };

  const onSubmit = () => {
    const newComment: IComment = {
      comment: comment,
      createdAt: new Date(),
      // @ts-ignore
      user: state.user?._id,
    };

    //onSave(newComment);
  };

  return (
    <div className="form-row mb-4">
      <div className="col-10">
        <input
          name="comment"
          type="text"
          className="form-control"
          required
          placeholder="Ingrese su Comentario"
          minLength={1}
          maxLength={255}
          value={comment}
          onChange={onChangeComment}
        />
      </div>
      <div className="col-2">
        <button className="form-control btn btn-pink" type="button" onClick={onSubmit}>
          <i className="fas fa-paper-plane"></i>
        </button>
      </div>
    </div>
  );
};
