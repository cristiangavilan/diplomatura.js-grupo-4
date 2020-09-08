import { model, Schema, Document } from 'mongoose';

export interface IMemeModel extends Document {
  image: string;
  filename: string;
  title: string;
  voteUp: Number;
  voteDown: Number;
  category: string;
  comments: string;
  owner: string;
}

export const MemeSchema = new Schema({
  image: { type: String, required: true },
  filename: { type: String, required: true },
  title: { type: String, required: true },
  voteUp: [{ type: Number }],
  voteDown: [{ type: Number }],
  createdAt: { type: Date, default: Date.now, required: true },
  updatedAt: { type: Date, default: Date.now, required: true },
  category: { type: String, required: true, ref: 'Category' },
  comments: [{ type: String, required: true, ref: 'Comment' }],
  owner: { type: Schema.Types.ObjectId, required: true, ref: 'User' },
});

export default model<IMemeModel>('Meme', MemeSchema);
