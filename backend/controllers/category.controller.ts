import { Request, Response } from 'express';
import { IApiCategoryList } from 'memegram-commons/models/Category.model';
import Category from '../models/Category.model';

export const postCategory = async (req: Request, res: Response) => {
  if (!req.body) {
    return res.status(400).json({
      msg: 'Debes completar el formulario',
    });
  }

  const newCategory = new Category(req.body);
  await newCategory.save();

  return res.sendStatus(200);
};

export const listCategory = async (req: Request, res: Response) => {
  const category = await Category.find();
  const total = await Category.countDocuments({});

  return res.json({
    ok: true,
    category,
    total,
  } as IApiCategoryList);
};
