// src/user.js

const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "users.json");

function readUsersFromFile() {
  if (!fs.existsSync(filePath)) {
    return [];
  }
  const data = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(data);
}

function writeUsersToFile(users) {
  fs.writeFileSync(filePath, JSON.stringify(users, null, 2), "utf-8");
}

function createUser(firstName, lastName) {
  let users = readUsersFromFile();
  const user = { id: users.length + 1, firstName, lastName };
  users.push(user);
  writeUsersToFile(users);
  console.log("User created:", user);
}

function listUsers() {
  const users = readUsersFromFile();
  console.log("User list:", users);
}

function getUser(id) {
  const users = readUsersFromFile();
  const user = users.find((u) => u.id === id);
  if (user) {
    console.log("User found:", user);
  } else {
    console.log(`User with id ${id} not found`);
  }
}

function updateUser(id, firstName, lastName) {
  let users = readUsersFromFile();
  const user = users.find((u) => u.id === id);
  if (user) {
    user.firstName = firstName || user.firstName;
    user.lastName = lastName || user.lastName;
    writeUsersToFile(users);
    console.log("User updated:", user);
  } else {
    console.log(`User with id ${id} not found`);
  }
}

function deleteUser(id) {
  let users = readUsersFromFile();
  const index = users.findIndex((u) => u.id === id);
  if (index !== -1) {
    const deletedUser = users.splice(index, 1);
    writeUsersToFile(users);
    console.log("User deleted:", deletedUser);
  } else {
    console.log(`User with id ${id} not found`);
  }
}

module.exports = {
  createUser,
  listUsers,
  getUser,
  updateUser,
  deleteUser,
};
