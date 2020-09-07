import { IBase, TId } from './Base.model';
import { IComment } from './Comment.model';
import { ICategory } from './Category.model';
import { IUser } from './User.model';

export interface IMeme extends IBase {
  image: string;
  filename: string;
  title: string;
  category: TId;
  owner: TId;
  voteUp?: TId[];
  voteDown?: TId[];
  createdAt?: Date;
  updatedAt?: Date;
  comments?: IComment[];
}

export type TMemeDetails = IMeme & {
  voteUp: number;
  voteDown: number;
  category: ICategory;
  owner: IUser;
};

export type IMemeListItem = TMemeDetails & {
  comments: number;
};
