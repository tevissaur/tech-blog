const { Post } = require('../models')

const postData = [
    {
        title: "Give me that SASS!",
        postContent: "Sassy text",
        userId: 1
    },
    {
        title: "Pick yourself up by your Bootstraps",
        postContent: "yada yada yada",
        userId: 3
    },
    {
        title: "Caught in the Tailwinds",
        postContent: "Oh, it sure is windy in here!",
        userId: 1
    },
    {
        title: "Watch your Hypertext Markup Language",
        postContent: "$#!~ $*%($@ #!$#!",
        userId: 2
    },
]

const seedPosts = () => Post.bulkCreate(postData)

module.exports = seedPosts