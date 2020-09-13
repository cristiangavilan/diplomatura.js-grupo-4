import { ICategoryBase, IApiCategoryList } from 'memegram-commons/models/Category.model';
import { request } from '../utils/axios.util';

export const CategorySdk = {
  get endpoint() {
    return '/category';
  },

  async getCategories(): Promise<ICategoryBase[]> {
    const response = await request().get<IApiCategoryList>(CategorySdk.endpoint);
    return response.data.category;
  },
};
