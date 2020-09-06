import { IBase, TId } from './Base.model';

export interface IComment extends IBase {
  comment: string;
  createdAt: Date;
  user: TId;
}
