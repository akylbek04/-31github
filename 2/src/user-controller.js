const users = [
  {
    id: 1,
    name: "Akylbek",
  },
  {
    id: 2,
    name: "Adylbek",
  },
  {
    id: 3,
    name: "Asylbek",
  },
];

const getUsers = (req, res) => {
  if (req.params.id) {
    return res.send(users.find((user) => user.id == req.params.id));
  }
  res.send(users);
};

const createUsers = (req, res) => {
  console.log(req.body);
  const user = req.body;
  users.push(user);
  res.send(user);
};


module.exports = {
    getUsers,
    createUsers
}