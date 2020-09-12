import React, { useCallback, useEffect, useState } from 'react';
import { Comment } from './Comment';
import { AddComment } from './AddComment';
import { IMemeDetails } from 'memegram-commons/models/Meme.model';
import { IMemeComment } from 'memegram-commons/models/Comment.model';
import { CommentsSdk } from '../sdk/CommentsSdk';
import { useAppState } from '../state';

interface ICommentGridProps {
  meme: IMemeDetails;
}

export const CommentGrid = ({ meme }: ICommentGridProps) => {
  const state = useAppState();
  const [comments, setComments] = useState<IMemeComment[]>([]);
  const [refresh, setRefresh] = useState(false);

  const fetchComments = useCallback(async () => {
    const data: IMemeComment[] = await CommentsSdk.getComments(meme._id);
    setComments(data);
  }, []);

  const onSave = async (comment: IMemeComment) => {
    console.log('Mande a guardar: ', comment);
    await CommentsSdk.addComment(meme._id, comment);
    setRefresh(!refresh);
  };

  useEffect(() => {
    fetchComments().then();
  }, [fetchComments, refresh]);

  return (
    <>
      {state.user && (
        <div className="row">
          {/* <div className="col">Total Comments</div> */}
          <div className="col">
            <AddComment onSaveComment={onSave} />
          </div>
        </div>
      )}

      {comments.map((c: IMemeComment, index) => {
        return (
          <div key={index} className="row">
            <div className="col">
              <Comment comment={c} />
            </div>
          </div>
        );
      })}
    </>
  );
};
