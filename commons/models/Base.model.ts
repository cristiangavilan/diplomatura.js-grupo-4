export interface IBase {
  _id?: any;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface IApiBaseModel {
  ok: boolean;
}

export interface IApiListBaseModel extends IApiBaseModel {
  total: number;
}
