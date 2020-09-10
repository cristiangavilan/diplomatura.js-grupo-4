import { TCategoryListItem } from 'memegram-commons/models/Category.model';
import { axiosInstance } from '../utils/axios.util';

export const CategorySdk = {
  async getCategories(): Promise<TCategoryListItem[]> {
    try {
      const dbCategories = await axiosInstance.get('/category');
      return dbCategories.data.category;
    } catch (error) {
      return error;
    }
  },
};
