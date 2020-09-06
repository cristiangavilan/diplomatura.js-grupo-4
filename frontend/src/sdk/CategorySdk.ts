import { dbCategories } from '../data/data';
import { ICategory } from 'memegram-commons/models/Category.model';

export const CategorySdk = {
  async getCategories(): Promise<ICategory[]> {
    return dbCategories;
  },
};
