import { IMemeComment } from 'memegram-commons/models/Comment.model';
import { dbComments } from '../data/data';
import { ObjectId } from 'bson';

export const CommentsSdk = {
  async getComments(memeId?: string): Promise<IMemeComment[]> {
    return dbComments;
  },
  async addComment(memeId: string, comment: IMemeComment): Promise<void> {
    comment._id = new ObjectId();
    dbComments.splice(0, 0, comment);
  },
};
