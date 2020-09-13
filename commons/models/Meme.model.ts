import { IBase, IApiListBaseModel, IApiBaseModel } from './Base.model';
import { IMemeComment } from './Comment.model';
import { ICategoryBase } from './Category.model';
import { IUserBase } from './User.model';

export type TMemeVoteStatus = 'up' | 'down' | 'no';

/**
 * Instancia limpia del meme, sin detalles
 */
export interface IMeme<TCategory = string> {
  image: string;
  filename: string;
  title: string;
  category: TCategory;
}

export interface IMemeBase<TCategory, TOwner = TCategory, TVote = number, TComment = TCategory>
  extends IMeme<TCategory>,
    IBase {
  owner: TOwner;
  voteUp?: TVote;
  voteDown?: TVote;
  comments?: TComment;
}

interface IMemeVoted {
  /**
   * El usuario actual ya votó?
   */
  voted: TMemeVoteStatus;
}

/**
 * Item en el listado de Memes.
 */
export interface IMemeListItem extends IMemeBase<ICategoryBase, IUserBase, number, number>, IMemeVoted {}

/**
 * Detalle del meme.
 */
export interface IMemeDetails extends IMemeBase<ICategoryBase, IUserBase, number, IMemeComment[]>, IMemeVoted {}

/**
 * API Listado de memes.
 */
export interface IApiMemes extends IApiListBaseModel {
  memes: IMemeListItem[];
}

/**
 * API para un solo Meme.
 */
export interface IApiMemeDetails extends IApiBaseModel {
  meme: IMemeDetails;
}
