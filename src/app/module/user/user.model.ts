import { Schema, model } from 'mongoose';
import { TUser } from './user.interface';

const userSchema = new Schema<TUser>(
  {
    name: {
      type: String,
      unique: true,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    role: {
      type: String,
      enum: ['user', 'admin'],
    },
    password: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
    },
    adress: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

export const User = model<TUser>('User', userSchema);
