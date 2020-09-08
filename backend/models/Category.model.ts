import { model, Schema, Document } from 'mongoose';

export interface ICategory extends Document {
  name: string;
}

export const CategorySchema = new Schema({
  name: { type: String, unique: true, required: true, lowercase: true },
});

export default model<ICategory>('Category', CategorySchema);
