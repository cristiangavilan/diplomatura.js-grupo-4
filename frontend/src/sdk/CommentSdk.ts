import { IMemeComment, IApiMemeComments } from 'memegram-commons/models/Comment.model';
import { request } from '../utils/axios.util';

export const CommentSdk = {
  get endpoint() {
    return '/comment';
  },

  async getComments(memeId: string): Promise<IMemeComment[]> {
    const result = await request().get<IApiMemeComments>(`${CommentSdk.endpoint}/${memeId}`);
    const comments = result.data.comments;
    comments.sort((a, b) => ((a.createdAt || 0) < (b.createdAt || 0) ? 1 : -1));
    return comments;
  },
  async addComment(memeId: string, comment: string): Promise<void> {
    await request().post<IApiMemeComments>(`${CommentSdk.endpoint}/${memeId}`, {
      comment,
    });
  },
};
