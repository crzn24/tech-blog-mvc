const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model { }

Comment.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        body: { // TODO possibly change to comment_body?
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        sequelize
    }
);

module.exports = Comment;