import { IMeme } from 'memegram-commons/models/Meme.model';
import { dbMemes } from '../data/data';
import { TId } from 'memegram-commons/models/Base.model';
import { ObjectId } from 'bson';

export const MemeSdk = {
  async getMemes(categoryId?: TId): Promise<IMeme[]> {
    if (categoryId) {
      const sId = `${categoryId}`;
      return dbMemes.filter((m) => `${m.category}` === sId);
    } else {
      return dbMemes;
    }
  },

  async addMeme(meme: IMeme): Promise<void> {
    meme._id = new ObjectId();

    dbMemes.push(meme);
  },

  async getMemeById(_id: TId): Promise<IMeme | undefined> {
    return dbMemes.find((m) => m._id === _id);
  },
};
