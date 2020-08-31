import { IUser } from './User.model';
import { IBase } from './Base.model';

export interface IComment extends IBase {
  comment: string;
  createdAt: Date;
  user: IUser;
}
