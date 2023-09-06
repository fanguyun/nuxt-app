import { defineMongooseModel } from '#nuxt/mongoose';

export const UserSchema = defineMongooseModel({
  name: 'User',
  schema: {
    // 用户名
    name: {
      type: 'string',
      required: true
    },
    // 密码
    password: {
      type: 'string',
      required: true
    }
  },
  hooks(schema) {
    schema.pre('save', function (this, next) {
      this.password = `hash@${this.password}`;
      next();
    });
  }
});
