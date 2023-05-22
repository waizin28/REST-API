import { v4 as uuidv4 } from "uuid";

let users = [];

export const getUsers = (req, res) => {
  res.send(users);
};

export const createUser = (req, res) => {
  const user = req.body;

  users.push({ ...user, id: uuidv4() }); //adding userID using uuidv

  //send back to clinet
  res.send(`User with the name ${user.firstName} added to database`);
};

export const getUser = (req, res) => {
  //: mean anything after /user will hit this path

  const { id } = req.params; //{} -> same as req.params.id

  const foundUser = users.find((user) => user.id === id);

  res.send(foundUser);
};

export const updateUser = (req, res) => {
  const { id } = req.params;
  const { firstName, lastName, age } = req.body;

  const userTobeUpdated = users.find((user) => user.id === id);

  if (firstName) {
    userTobeUpdated.firstName = firstName;
  }

  if (lastName) {
    userTobeUpdated.lastName = lastName;
  }

  if (age) {
    userTobeUpdated.age = age;
  }

  res.send(`User with the id ${id} has been updated`);
};

export const deleteUser = (req, res) => {
  const { id } = req.params;

  users = users.filter((user) => user.id != id); //true keep in the array else remove it

  res.send(`User with the id ${id} deleted from the database`);
};
