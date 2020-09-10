import { IBase } from './Base.model';

export interface ICategory extends IBase {
  name: string;
}

export type TCategoryListItem = ICategory & { _id: string };
