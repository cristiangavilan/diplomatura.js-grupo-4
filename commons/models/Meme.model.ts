import { IBase } from './Base.model';
import { ICategory } from './Category.model';
import { IUser } from './User.model';
import { IComment } from './Comment.model';

export interface Meme extends IBase {
  image: string;
  filename: string;
  title: string;
  category: ICategory;
  owner: IUser;
  voteUp: string[];
  voteDown: string[];
  createdAt: Date;
  updatedAt: Date;
  comments: IComment[];
}
