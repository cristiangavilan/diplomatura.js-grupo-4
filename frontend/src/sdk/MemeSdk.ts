import { IMemeDetails, IApiMemes, IMeme, IApiMemeDetails } from 'memegram-commons/models/Meme.model';
import { request } from '../utils/axios.util';

export const MemeSdk = {
  get endpoint() {
    return '/meme';
  },

  async getMemes(skip: number = 0, limit: number = 30, categoryId?: string): Promise<IApiMemes> {
    const respuesta = await request().get<IApiMemes>(MemeSdk.endpoint, {
      params: {
        skip,
        limit,
        categoryId,
      },
    });

    return respuesta.data;
  },

  async addMeme(meme: IMeme): Promise<void> {
    await request().post('/meme', { meme });
  },

  async getMemeById(memeId: string): Promise<IMemeDetails> {
    const respuesta = await request().get<IApiMemeDetails>(`${MemeSdk.endpoint}/${memeId}`);
    return respuesta.data.meme;
  },
};
