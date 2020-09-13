import { model, Schema, Document } from 'mongoose';
import { IMemeBase } from 'memegram-commons/models/Meme.model';
import { MemeCommentSchemma } from './Comment.model';
import { IMemeCommentBase } from 'memegram-commons/models/Comment.model';

export interface IMemeModel
  extends IMemeBase<
      Schema.Types.ObjectId,
      Schema.Types.ObjectId,
      Schema.Types.ObjectId[],
      IMemeCommentBase<Schema.Types.ObjectId>[]
    >,
    Document {
  _id: Schema.Types.ObjectId;
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
        type: Schema.Types.ObjectId,
      },
    ],
    voteDown: [
      {
        type: Schema.Types.ObjectId,
      },
    ],
    category: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'Category',
    },
    comments: [
      {
        type: MemeCommentSchemma,
        required: true,
      },
    ],
    owner: {
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

export default model<IMemeModel>('Meme', MemeSchema);
