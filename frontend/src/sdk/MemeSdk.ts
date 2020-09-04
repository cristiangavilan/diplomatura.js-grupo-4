import { Meme } from 'memegram-commons/models/Meme.model';
import { dbMemes } from '../data/data';

export const MemeSdk = {
  async getMemes(categoryId?: any): Promise<Meme[]> {
    if (categoryId) {
      return dbMemes.filter((m) => m.category._id === categoryId);
    } else {
      return dbMemes;
    }
  },

  async addMeme(meme: Meme): Promise<void> {
    dbMemes.push(meme);
  },
};
