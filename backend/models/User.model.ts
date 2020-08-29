import { model, Schema, Document } from 'mongoose';
import bcrypt from 'bcrypt';
const uniqueValidator = require('mongoose-unique-validator');

export interface IUserModel extends Document {
  username: string;
  email: string;
  password: string;
  img: string;
  signupDate: string;
  lastLogin: Number;
  google: string;
  comparePassword: (password: string) => Promise<Boolean>;
}

const UserSchema = new Schema({
  username: { type: String, unique: true, required: true, lowercase: true },
  email: { type: String, unique: true, required: true, lowercase: true },
  password: { type: String, required: true },
  img: { type: String },
  signupDate: { type: Date, default: () => Date.now() },
  lastLogin: { type: Date, default: () => Date.now() },
  google: {
    type: Boolean,
    default: false,
  },
});

//this enforces emails to be unique!
UserSchema.plugin(uniqueValidator, { message: '{PATH} debe de ser único' });

//this function will be called before a document is saved
UserSchema.pre<IUserModel>('save', async function (next) {
  let user = this;
  if (!user.isModified('password')) return next();
  //we generate the salt using 12 rounds and then use that salt with the received password string to generate our hash
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(user.password, salt);
  user.password = hash;
  next();
});

UserSchema.methods.comparePassword = async function (password: string): Promise<Boolean> {
  return await bcrypt.compare(password, this.password);
};

export default model<IUserModel>('User', UserSchema);
