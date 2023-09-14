import { defineMongooseModel } from '#nuxt/mongoose';

export const UserSchema = defineMongooseModel({
  name: 'User',
  schema: {
    // 用户名
    name: {
      type: String,
      required: true
    },
    // 密码
    password: {
      type: String,
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
