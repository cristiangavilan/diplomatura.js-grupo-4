import { Schema, Document, Types } from 'mongoose';
import { IMemeCommentBase } from 'memegram-commons/models/Comment.model';

export interface IMemeCommentModel extends IMemeCommentBase<Types.ObjectId>, Document {
  _id: Types.ObjectId;
}

export const MemeCommentSchemma = new Schema<IMemeCommentModel>(
  {
    comment: {
      type: String,
      required: true,
    },
    user: {
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
