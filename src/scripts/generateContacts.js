import { createFakeContact } from '../utils/createFakeContact.js';
import { writeContacts } from '../utils/writeContacts.js';
import { readContacts } from '../utils/readContacts.js';

const generateContacts = async (number) => {
  const newContacts = [];
  const currentData = await readContacts();
  while (number > 0) {
    number--;
    newContacts.push(createFakeContact());
  }

  const updatedContacts = [...currentData, ...newContacts];
  await writeContacts(updatedContacts);

  console.log(
    newContacts.length > 0
      ? 'New contacts have been generated'
      : 'Zero contacts have been generated, check the function settings',
  );
};

generateContacts(5);
