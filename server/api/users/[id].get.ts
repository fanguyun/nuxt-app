export default defineEventHandler(async (event) => {
  const name = getRouterParam(event, 'name');
  const id = parseInt(event.context.params?._id) as number;
  if (!Number.isInteger(id)) {
    throw createError({
      statusCode: 400,
      statusMessage: 'ID should be an integer'
    });
  }
  const cookies = parseCookies(event);
  console.log(name, cookies);
  try {
    return await UserSchema.findOne({ _id: event.context.params?._id });
  } catch (error) {
    return error;
  }
});
