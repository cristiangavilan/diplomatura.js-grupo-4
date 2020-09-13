import { Request, Response } from 'express';
import Meme from '../models/Meme.model';
import { IApiMemes, IMemeListItem, IApiMemeDetails, IMemeDetails } from 'memegram-commons/models/Meme.model';
import Mongoose, { Schema, Types } from 'mongoose';

export const getMemes = async (req: Request, res: Response) => {
  const skip = Number(req.query.skip) || 0; //variable que espera un valor para paginar
  const limit = Number(req.query.limit) || 30; //variable que espera un valor para paginar
  const match: any = {};
  const categoryId = req.query.categoryId;

  if (categoryId) {
    match.category = { $eq: new Mongoose.Types.ObjectId(categoryId.toString()) };
  }

  const memes = await Meme.aggregate([
    { $match: match },
    { $sort: { createdAt: -1 } },
    { $skip: skip }, //salta el valor desde (muestra el valor desde ej 10 muestra desde el 11)
    { $limit: limit },
    // Populo category
    {
      $lookup: {
        from: 'categories',
        localField: 'category',
        foreignField: '_id',
        as: 'category',
      },
    },
    { $unwind: '$category' },
    // Populo User
    {
      $lookup: {
        from: 'users',
        localField: 'owner',
        foreignField: '_id',
        as: 'owner',
      },
    },
    {
      $unwind: '$owner',
    },
    // Totales
    {
      $project: {
        _id: 1,
        user: 1,
        category: 1,
        filename: 1,
        image: 1,
        owner: 1,
        voted: 'no',
        voteDown: {
          $cond: {
            if: { $isArray: '$voteDown' },
            then: { $size: '$voteDown' },
            else: 0,
          },
        },
        voteUp: {
          $cond: {
            if: { $isArray: '$voteUp' },
            then: { $size: '$voteUp' },
            else: 0,
          },
        },
        comments: {
          $cond: {
            if: { $isArray: '$comments' },
            then: { $size: '$comments' },
            else: 0,
          },
        },
        createdAt: 1,
        updatedAt: 1,
        title: 1,
      } as {
        // Para validar que no falte ningún field
        [key in keyof IMemeListItem]: any;
      },
    },
  ]).sort({ createdAt: 'descending' });

  const total = await Meme.countDocuments(match);

  res.json({
    ok: true,
    memes,
    total,
  } as IApiMemes);
};

export const postMeme = async (req: Request, res: Response) => {
  if (!req.body) {
    return res.status(400).json({ msg: 'Debes completar el formulario' });
  }

  const meme = new Meme(req.body.meme);
  await meme.save();

  return res.json({
    ok: true,
    msg: 'Meme Creado',
    meme,
  });
};

export const getMeme = async (req: Request, res: Response) => {
  const memeId = req.params.memeId;

  const match: any = {};
  if (memeId) {
    match._id = { $eq: new Mongoose.Types.ObjectId(memeId.toString()) };
  }
  const meme = await Meme.aggregate([
    { $match: match },
    // Populo category
    {
      $lookup: {
        from: 'categories',
        localField: 'category',
        foreignField: '_id',
        as: 'category',
      },
    },
    { $unwind: '$category' },
    // Populo User
    {
      $lookup: {
        from: 'users',
        localField: 'owner',
        foreignField: '_id',
        as: 'owner',
      },
    },
    {
      $unwind: '$owner',
    },
    // Totales
    {
      $project: {
        _id: 1,
        user: 1,
        category: 1,
        filename: 1,
        image: 1,
        owner: 1,
        voted: 'no',
        voteDown: {
          $cond: {
            if: { $isArray: '$voteDown' },
            then: { $size: '$voteDown' },
            else: 0,
          },
        },
        voteUp: {
          $cond: {
            if: { $isArray: '$voteUp' },
            then: { $size: '$voteUp' },
            else: 0,
          },
        },
        comments: {
          $cond: {
            if: { $isArray: '$comments' },
            then: { $size: '$comments' },
            else: 0,
          },
        },
        createdAt: 1,
        updatedAt: 1,
        title: 1,
      } as {
        // Para validar que no falte ningún field
        [key in keyof IMemeDetails]: any;
      },
    },
  ]);

  const m: IMemeDetails = meme[0];

  res.json({
    ok: true,
    meme: m,
  } as IApiMemeDetails);
};
