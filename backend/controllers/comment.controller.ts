import { Request, Response } from 'express';
import { IApiMemeComments, IMemeComment } from 'memegram-commons/models/Comment.model';
import Meme from '../models/Meme.model';
import { Auth } from '../helpers/jwt';
import { Types } from 'mongoose';

export const postComment = async (req: Request, res: Response) => {
  const { memeId } = req.params;
  const { comment } = req.body;
  const sessionUser = Auth.decodeToken(req);

  if (sessionUser) {
    const userId = new Types.ObjectId(sessionUser.id);
    const newComment = { comment, user: userId };

    const data = await Meme.findByIdAndUpdate(
      memeId,
      {
        $push: {
          comments: newComment,
        },
      },
      { new: true }
    );

    res.json(data);
  }
};

export const getComment = async (req: Request, res: Response) => {
  const memeComments = await Meme.findById(req.params.memeId).populate('comments.user').select(['comments']);
  if (!memeComments) {
    return res.sendStatus(404);
  }

  const comments = ((memeComments.comments || []) as unknown) as IMemeComment[];
  const total = comments?.length || 0;

  res.json({
    ok: true,
    comments,
    total,
  } as IApiMemeComments);
};

export const updateComment = async (req: Request, res: Response) => {};
