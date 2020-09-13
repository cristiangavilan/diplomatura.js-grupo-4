import { IBase, IApiListBaseModel } from './Base.model';
import { IUserBase } from './User.model';

export interface IMemeCommentBase<TUser> extends IBase {
  user: TUser;
  comment: string;
}

export interface IMemeComment extends IMemeCommentBase<IUserBase> {}

export interface IApiMemeComments extends IApiListBaseModel {
  comments: IMemeComment[];
}
