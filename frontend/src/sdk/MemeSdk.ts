import { IMeme } from 'memegram-commons/models/Meme.model';
import { dbMemes } from '../data/data';
import { TId } from 'memegram-commons/models/Base.model';

export const MemeSdk = {
  async getMemes(categoryId?: TId): Promise<IMeme[]> {
    if (categoryId) {
      return dbMemes.filter((m) => m.category._id === categoryId);
    } else {
      return dbMemes;
    }
  },

  async addMeme(meme: IMeme): Promise<void> {
    meme._id = Date.now();

    dbMemes.push(meme);
  },

  async getMemeById(_id: TId): Promise<IMeme | undefined> {
    return dbMemes.find((m) => m._id === _id);
  },
};
