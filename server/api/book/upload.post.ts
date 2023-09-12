import fs from 'fs';

function parseTxtToJSON(novelData: any) {
  const chapters: any = novelData.split(/\n{2,}/); // 根据空行分割章节
  const novelJSON = chapters.map((chapter: any) => {
    const lines = chapter.split('\n');
    const title = lines[0];
    const content = lines.slice(1).join('\n');

    return {
      title,
      content
    };
  });

  return novelJSON;
}

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const fileData = body.split('\r\n')[4];
  console.log(parseTxtToJSON(fileData));

  try {
    // const data = fs.readFileSync(formData, 'utf-8');
    return parseTxtToJSON(fileData);
    // return await new BookSchema(body).save();
  } catch (error) {
    return error;
  }
});
