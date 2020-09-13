import { model, Schema, Document } from 'mongoose';
import { ICategoryBase } from 'memegram-commons/models/Category.model';

export interface ICategoryModel extends ICategoryBase, Document {
  _id: Schema.Types.ObjectId;
}

export const CategorySchema = new Schema<ICategoryModel>(
  {
    name: {
      type: String,
      unique: true,
      required: true,
      lowercase: true,
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

export default model<ICategoryModel>('Category', CategorySchema);
