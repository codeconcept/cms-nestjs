import * as mongoose from 'mongoose';

export const ArticleSchema = new mongoose.Schema({
  title: String,
  content: String,
  author: String,
  creationDate: String,
});
