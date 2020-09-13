import { Schema, Document } from 'mongoose';
import { IMemeCommentBase } from 'memegram-commons/models/Comment.model';

export interface IMemeCommentModel extends IMemeCommentBase<Schema.Types.ObjectId>, Document {
  _id: Schema.Types.ObjectId;
}

export const MemeCommentSchemma = new Schema<IMemeCommentModel>(
  {
    comment: {
      type: String,
      lowercase: true,
    },
    user: {
      type: Schema.Types.ObjectId,
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
