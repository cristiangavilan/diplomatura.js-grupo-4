import { IBase, TId } from './Base.model';
import { IUser } from './User.model';

interface _IComment extends IBase {
  comment: string;
  createdAt: Date;
}

export interface IComment extends _IComment {
  user: TId;
}

export interface IMemeComment extends _IComment {
  user: IUser;
}
