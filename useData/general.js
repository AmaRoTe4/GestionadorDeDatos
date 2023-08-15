import * as fs from 'fs';

export const leerFileJson = async (path) => {
  try {
    const data = await fs.readFileSync(path);
    return JSON.parse(data)
  } catch (error) {
    console.log(error.message);
  }
};

export const escribirFileJson = async (path , data) => {
  try {
    await fs.writeFileSync(path , (JSON.stringify(data)));
  } catch (error) {
    console.log(error.message);
  }
};