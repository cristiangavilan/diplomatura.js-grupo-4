import { IBase, IApiListBaseModel } from './Base.model';

export interface ICategoryBase extends IBase {
  name: string;
}

export interface IApiCategoryList extends IApiListBaseModel {
  category: ICategoryBase[];
}
