const sequelize = require("../config/connection");

const seedUser = require("./userSeed");
const seedPost = require("./postSeed");
const seedComment = require("./commentSeed");

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');

  await seedUser();
  console.log('\n----- USER DATA SEEDED -----\n');

  await seedPost();
  console.log('\n----- POST DATA SEEDED -----\n');

  await seedComment();
  console.log('\n----- COMMENT DATA SEEDED -----\n');

  process.exit(0);
};

seedAll();