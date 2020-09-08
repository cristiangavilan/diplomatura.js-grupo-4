import { model, Schema, Document } from 'mongoose';

export interface ICommentModel extends Document {
  comment: string;
  createdAt: Date;
  user: string;
}

export const CommentSchemma = new Schema({
  comment: { type: String, lowercase: true },
  createdAt: { type: Date, default: Date.now },
  user: { type: Schema.Types.ObjectId, required: true, ref: 'User' },
});

export default model<ICommentModel>('Comment', CommentSchemma);
