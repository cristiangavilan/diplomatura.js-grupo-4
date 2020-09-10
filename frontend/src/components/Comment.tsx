import React from 'react';
import moment from 'moment';
import { IMemeComment } from 'memegram-commons/models/Comment.model';

interface IMemeCommentProps {
  comment: IMemeComment;
}

export const Comment = ({ comment }: IMemeCommentProps) => {
  return (
    <div>
      {comment.user} {comment.comment} hace: {moment(comment.createdAt).fromNow()}
    </div>
  );
};
