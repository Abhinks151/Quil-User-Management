import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dataPath = path.join(__dirname, 'data.json');
// console.log(dataPath);


export const readUsers = () => {
  const data = fs.readFileSync(dataPath, 'utf-8');
  return JSON.parse(data);
}


export const writeUsers = (users) => {
  fs.writeFileSync(dataPath, JSON.stringify(users, null, 2), 'utf-8');
}

export const checkUserExist = (userName) => {
  const users = readUsers();
  return users.find(user => user.name.toLowerCase() === userName.toLowerCase());
}

export const addUser = (newUser) => {
  const users = readUsers();
  users.push(newUser);
  writeUsers(users);
}
