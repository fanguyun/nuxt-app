export default defineEventHandler(async () => {
  try {
    return await BookSchema.find({});
  } catch (error) {
    return error;
  }
});
