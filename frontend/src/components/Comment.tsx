import React from 'react';
import moment from 'moment';
import { IMemeComment } from 'memegram-commons/models/Comment.model';
import { UserInfo } from './UserInfo';

interface IMemeCommentProps {
  comment: IMemeComment;
}

export const Comment = ({ comment }: IMemeCommentProps) => {
  return (
    <div>
      <UserInfo user={comment.user} />
      {comment.comment} <p className="text-muted text-right">{moment(comment.createdAt).fromNow()}</p>
    </div>
  );
};
