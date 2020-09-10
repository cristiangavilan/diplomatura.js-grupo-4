import { IBase, TId } from './Base.model';
import { IComment, IMemeComment } from './Comment.model';
import { TCategoryListItem } from './Category.model';
import { IUser } from './User.model';

interface _IMeme {
  image: string;
  filename: string;
  title: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export type TMemeVoteStatus = 'up' | 'down' | 'no';

export interface IMeme extends _IMeme, IBase {
  category: TId;
  owner: TId;
  voteUp?: TId[];
  voteDown?: TId[];
  comments?: IComment[];
}

export interface IMemeListItem extends _IMeme {
  _id: string;
  category: TCategoryListItem;
  owner: IUser;
  voteUp: number;
  voteDown: number;
  comments: number;
  voted: TMemeVoteStatus;
}

export interface IMemeDetails extends _IMeme {
  _id: string;
  category: TCategoryListItem;
  owner: IUser;
  voteUp: number;
  voteDown: number;
  comments: IMemeComment[];
  voted: TMemeVoteStatus;
}
