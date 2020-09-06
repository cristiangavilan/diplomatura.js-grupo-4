import { IBase, TId } from './Base.model';
import { IComment } from './Comment.model';

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
