import { defineMongooseModel } from '#nuxt/mongoose';

export const BookSchema = defineMongooseModel({
  name: 'Book',
  schema: {
    //书名
    bookName: {
      type: 'string',
      required: true
    },
    // 标签
    tag: {
      type: 'string',
      required: true
    },
    desc: {
      type: 'string',
      required: true
    }
  },
  hooks(schema) {
    schema.pre('save', function (this, next) {
      next();
    });
  }
});
