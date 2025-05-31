import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const writeContacts = async (updatedContacts) => {
  try {
    const json = JSON.stringify(updatedContacts);
    await fs.writeFile(PATH_DB, json);
  } catch (e) {
    console.log(e);
  }
};
