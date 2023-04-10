const contacts = require("./contacts");
const yargs = require("yargs");
const { hideBin } = require("yargs/helpers");

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
      const allContacts = await contacts.listContacts();
      return console.table(allContacts);
      break;

    case "get":
      const contactById = await contacts.getContactById(id);
      return console.table(contactById);
      break;

    case "add":
      const newContact = await contacts.addContact({ name, email, phone });
      return console.table(newContact);
      break;

    case "remove":
      const deleteContact = await contacts.removeContact(id);
      return console.table(deleteContact);
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
};

const arr = hideBin(process.argv);
console.log(arr);
const { argv } = yargs(arr);
invokeAction(argv);
