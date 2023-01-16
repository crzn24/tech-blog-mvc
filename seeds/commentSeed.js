const { Comment } = require("../models");

const commentData = [
  {
    body:
      "First",
    user_id: 2,
    post_id: 1,
  },
];

const seedCommentData = () => Comment.bulkCreate(commentData);

module.exports = seedCommentData;