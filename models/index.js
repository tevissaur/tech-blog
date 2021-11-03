const User = require('./User')
const Post = require('./Post')
console.log(User)

User.hasMany(Post, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
})


Post.belongsTo(User, {
    foreignKey: 'user_id'
})


module.exports = { User, Post }