const users = [{
  name: "Herr Las",
  email: "las@gmail.com",
  password: "12345633",
},
{
  name: "Laswi",
  email: "laswi@gmail.com",
  password: "123456",
}];
const roles = [
  {
    id: 1,
    type: "admin",
    permissions: ["r", "w", "u", "d"],
  },
  {
    id: 2,
    type: "user",
    permissions: ["r", "w"],
  },
];

module.exports = {
  users,
  roles,
};
