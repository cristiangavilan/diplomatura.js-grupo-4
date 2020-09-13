import React, { useState } from 'react';

interface IMemeCommentProps {
  onSaveComment: (comment: string) => void | Promise<void>;
}

export const AddComment = ({ onSaveComment }: IMemeCommentProps) => {
  const [commentText, setCommentText] = useState('');

  const onChangeComment = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setCommentText(event ? event?.target.value : '');
  };

  const onSubmit = () => {
    if (commentText.length > 4) {
      onSaveComment(commentText);
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
