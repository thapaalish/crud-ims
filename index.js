// src/index.js

const {
  createUser,
  listUsers,
  getUser,
  updateUser,
  deleteUser,
} = require("./user");

const args = process.argv.slice(2);
const command = args[0];

switch (command) {
  case "user:create":
    createUser(args[1], args[2]);
    break;
  case "user:list":
    listUsers();
    break;
  case "user:get":
    getUser(parseInt(args[1]));
    break;
  case "user:update":
    updateUser(parseInt(args[1]), args[2], args[3]);
    break;
  case "user:delete":
    deleteUser(parseInt(args[1]));
    break;
  default:
    console.log("Invalid command");
    console.log("Available commands:");
    console.log("  user:create <firstName> <lastName>");
    console.log("  user:list");
    console.log("  user:get <id>");
    console.log("  user:update <id> [firstName] [lastName]");
    console.log("  user:delete <id>");
}
