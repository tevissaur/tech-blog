const router = require('express').Router()
const { User, Post } = require('../../models/')


router.get('/', async (req, res) => {
    try {
        const allPosts = await Post.findAll({
            include: [{ model: User }]
        })
        res.status(200).json(allPosts)
    }
    catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
})


module.exports = router