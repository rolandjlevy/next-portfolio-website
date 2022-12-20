import mongoose from 'mongoose';
const MONGODB_URI:any = process.env.NEXT_PUBLIC_MONGODB_URI;

export const connectMongoDb = async () => {
  mongoose.connect(MONGODB_URI);
}