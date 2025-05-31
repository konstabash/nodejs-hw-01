import { writeContacts } from '../utils/writeContacts.js';

export const removeAllContacts = async () => {
  writeContacts([]);
  console.log('All contacts have been deleted');
};

removeAllContacts();
