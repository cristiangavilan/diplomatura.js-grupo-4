import { ObjectId } from 'bson';

export type TId = ObjectId;

export interface IBase {
  _id?: TId;
}
