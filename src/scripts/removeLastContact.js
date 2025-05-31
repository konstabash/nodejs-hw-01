import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
  const currentData = await readContacts();
  const updatedData = currentData.slice(0, currentData.length - 1);
  await writeContacts(updatedData);
  console.log('Last contact has been deleted');
};

removeLastContact();
