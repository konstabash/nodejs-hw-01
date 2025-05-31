import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const addOneContact = async () => {
  const currentData = await readContacts();

  const updatedContacts = [...currentData, createFakeContact()];
  await writeContacts(updatedContacts);
  console.log('One new contact has been added');
};

addOneContact();
