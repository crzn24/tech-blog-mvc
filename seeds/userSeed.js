const { User } = require("../models");

const userData =
[
    {
      "username": "Luke",
      "password": "passwordnumber1"
    },
    {
      "username": "Leia",
      "password": "passwordnumber2"
    },
    {
      "username": "Han",
      "password": "passwordnumber3"
    }
  ]

  const seedUserData = () => User.bulkCreate(userData);

  module.exports = seedUserData;