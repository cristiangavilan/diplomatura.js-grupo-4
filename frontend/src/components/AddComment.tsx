import React, { useState } from 'react';
import { IComment, IMemeComment } from 'memegram-commons/models/Comment.model';
import { useAppState } from '../state';
import { CommentsSdk } from '../sdk/CommentsSdk';

interface IMemeCommentProps {
  onSaveComment: (comment: IMemeComment) => void | Promise<void>;
}

export const AddComment = ({ onSaveComment }: IMemeCommentProps) => {
  const state = useAppState();
  const [commentText, setCommentText] = useState('');

  const onChangeComment = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setCommentText(event ? event?.target.value : '');
  };

  const onSubmit = () => {
    if (commentText.length > 4) {
      const newComment: IMemeComment = {
        comment: commentText,
        createdAt: new Date(),
        // @ts-ignore
        user: state.user,
      };

      onSaveComment(newComment);
      setCommentText('');
    }
  };

  return (
    <div className="form-row mb-4">
      <div className="col-10">
        <input
          id="inputComment"
          name="comment"
          type="text"
          className="form-control"
          required
          placeholder="Ingrese su Comentario"
          minLength={1}
          maxLength={255}
          value={commentText}
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
