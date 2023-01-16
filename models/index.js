// Model Relationships

const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

// Post belongs to user (one-to-one)
Post.belongsTo(User, {
    foreignKey: 'user_id',
});

// Posts can have many comments (one-to-many)
Post.hasMany(Comment, {
    foreignKey: 'post_id',
    onDelete: 'CASCADE'
});

// Comments belong to a user (one-to-one)
Comment.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});


// TODO More relationships

// Comments belong to a post
Comment.belongsTo(Post, {
    foreignKey: 'post_id',
});

// Users can have many posts
User.hasMany(Post, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
});

// User can have many comments
User.hasMany(Comment, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
});

module.exports = {
    User,
    Comment,
    Post
};