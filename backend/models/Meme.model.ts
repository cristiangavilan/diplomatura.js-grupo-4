import Mongoose, { model, Schema, Document, Types } from 'mongoose';
import { IMemeBase } from 'memegram-commons/models/Meme.model';
import { MemeCommentSchemma } from './Comment.model';
import { IMemeCommentBase } from 'memegram-commons/models/Comment.model';

export interface IMemeModel
  extends IMemeBase<Types.ObjectId, Types.ObjectId, Types.ObjectId[], IMemeCommentBase<Types.ObjectId>[]>,
    Document {
  _id: Types.ObjectId;
}

export const MemeSchema = new Schema<IMemeModel>(
  {
    image: {
      type: String,
      required: true,
    },
    filename: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    voteUp: [
      {
        type: Types.ObjectId,
      },
    ],
    voteDown: [
      {
        type: Types.ObjectId,
      },
    ],
    category: {
      type: Types.ObjectId,
      required: true,
      ref: 'Category',
    },
    comments: [MemeCommentSchemma],
    owner: {
      type: Types.ObjectId,
      required: true,
      ref: 'User',
    },
  },
  {
    timestamps: true,
    usePushEach: true,
    toJSON: {
      virtuals: true,
    },
  }
);

export default model<IMemeModel>('Meme', MemeSchema);
