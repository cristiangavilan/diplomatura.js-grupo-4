import mongoose, { Schema } from 'mongoose';
import { IUser } from '../../types/models/User';

export const UserSchema = new Schema<IUser>({
  username: String,
  email: String,
  password: String,
  profilePicture: Buffer,
  role: {
    enum: ['user', 'admin'],
    default: 'user',
  },
});

export const User = mongoose.model('User', UserSchema);

// User.findOne({}).then((u: IUser) => u.username);
