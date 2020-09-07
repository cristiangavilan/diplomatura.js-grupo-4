import { IMeme, TMemeDetails, IMemeListItem } from 'memegram-commons/models/Meme.model';
import { dbMemes, dbCategories, dbUsers } from '../data/data';
import { TId } from 'memegram-commons/models/Base.model';
import { ObjectId } from 'bson';
import { ICategory } from 'memegram-commons/models/Category.model';
import { IUser } from 'memegram-commons/models/User.model';

export const MemeSdk = {
  async getMemes(categoryId?: TId): Promise<IMemeListItem[]> {
    let memes: IMeme[] = [];

    if (categoryId) {
      memes = dbMemes.filter((m) => m.category.equals(categoryId));
    } else {
      memes = dbMemes;
    }

    // Clona objeto
    const c = memes.map((m) => ({ ...m })) as any;

    c.forEach((m: any) => {
      m.category = (dbCategories.find((c) => c._id?.equals(m.category)) as unknown) as ICategory;
      m.owner = (dbUsers.find((u) => u._id?.equals(m.owner)) as unknown) as IUser;
      m.comments = m.comments?.length || 0;
      m.voteUp = m.voteUp?.length || 0;
      m.voteDown = m.voteDown?.length || 0;
    });

    return c;
  },

  async addMeme(meme: IMeme): Promise<void> {
    meme._id = new ObjectId();

    dbMemes.push(meme);
  },

  async getMemeById(_id: TId): Promise<TMemeDetails | undefined> {
    const meme: any = Object.assign(
      {},
      dbMemes.find((m) => m._id?.equals(_id))
    );

    meme.category = dbCategories.find((c) => c._id?.equals(meme.category));
    meme.owner = dbUsers.find((u) => u._id?.equals(meme.owner));

    return meme as TMemeDetails;
  },
};
