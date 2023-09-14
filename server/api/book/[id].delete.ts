export default defineEventHandler(async (event) => {
  try {
    return await BookSchema.findOneAndDelete({
      id: event.context.params?._id
    });
  } catch (error) {
    return error;
  }
});
