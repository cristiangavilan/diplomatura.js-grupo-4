import mongoose, { Schema } from 'mongoose';
import { Document } from 'mongoose';
import { IUser } from 'memegram-commons/models/User';

export interface IUserModel extends IUser, Document {
  password: String;
}

export const UserSchema = new Schema<IUserModel>({
  username: String,
  email: String,
  password: String,
  profilePicture: Buffer,
  role: {
    enum: ['user', 'admin'],
    default: 'user',
  },
});

export const User = mongoose.model<IUserModel>('User', UserSchema);
