import { IBase, TId } from './Base.model';
import { IComment } from './Comment.model';
import { ICategory } from './Category.model';
import { IUser } from './User.model';

interface _IMeme extends IBase {
  image: string;
  filename: string;
  title: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export type TMemeVoteStatus = 'up' | 'down' | 'no';

export interface IMeme extends _IMeme {
  category: TId;
  owner: TId;
  voteUp?: TId[];
  voteDown?: TId[];
  comments?: IComment[];
}

export interface IMemeListItem extends _IMeme {
  category: ICategory;
  owner: IUser;
  voteUp: number;
  voteDown: number;
  comments: number;
  voted: TMemeVoteStatus;
}

export interface IMemeDetails extends _IMeme {
  category: ICategory;
  owner: IUser;
  voteUp: number;
  voteDown: number;
  comments: IComment[];
  voted: TMemeVoteStatus;
}
