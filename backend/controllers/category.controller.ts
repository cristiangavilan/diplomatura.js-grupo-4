import { Request, Response } from 'express';
import Category from '../models/Category.model';

export const postCategory = async (req: Request, res: Response) => {
  if (!req.body) {
    return res.status(400).json({ msg: 'Debes completar el formulario' });
  }
  const newCategory = new Category(req.body);

  try {
    await newCategory.save();
    return res.status(200).json({
      ok: true,
      msg: 'Usuario Creado',
      newCategory,
    });
  } catch (error) {
    return res.status(400).json({
      ok: false,
      msg: 'Verificar los datos enviados',
      error,
    });
  }
};

export const getCategory = async (req: Request, res: Response) => {
  console.log('a ver que hay');
  const category = await Category.find();
  return res.status(200).json({
    ok: true,
    category,
  });
};

export const delCategory = async (req: Request, res: Response) => {};

export const updateCategory = async (req: Request, res: Response) => {};
