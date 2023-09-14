import { defineMongooseModel } from '#nuxt/mongoose';

export const BookSchema = defineMongooseModel({
  name: 'Book',
  schema: {
    //书名
    bookName: {
      type: String,
      required: true
    },
    bookPic: {
      type: String,
      required: true
    },
    // 标签
    tag: {
      type: String,
      required: true
    },
    desc: {
      type: String,
      required: true
    }
  },
  hooks(schema) {
    schema.pre('save', function (this, next) {
      next();
    });
  }
});
