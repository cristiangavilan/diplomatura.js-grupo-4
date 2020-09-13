import { Request, Response } from 'express';
import { IApiMemeComments, IMemeComment } from 'memegram-commons/models/Comment.model';
import Meme from '../models/Meme.model';

export const postComment = async (req: Request, res: Response) => {
  const { comment } = req.body;

  if (!comment) {
    return res.status(400).json({ msg: 'Debes completar el formulario' });
  }

  const meme = await Meme.findById(req.params.memeId);

  if (!meme) {
    return res.sendStatus(404);
  }

  await Meme.updateOne(
    {
      _id: meme._id,
    },
    {
      $push: {
        comments: comment,
      },
    }
  );

  return res.sendStatus(200);
};

export const getComment = async (req: Request, res: Response) => {
  const memeComments = await Meme.findById(req.params.memeId)
    .populate('comments.user')
    .select(['comments'])
    .sort({ createdAt: 'descending' });

  if (!memeComments) {
    return res.sendStatus(404);
  }

  const comments = ((memeComments.comments || []) as unknown) as IMemeComment[];
  const total = comments.length;

  res.json({
    ok: true,
    comments,
    total,
  } as IApiMemeComments);
};

export const updateComment = async (req: Request, res: Response) => {};
