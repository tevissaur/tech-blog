const router = require('express').Router()
const { User, Post } = require('../../models/')



router.get('/', async (req, res) => {
    try {
        const allUsers = await User.findAll({
            include: [{ model: Post }]
        })
        res.status(200).json(allUsers)
    }
    catch (err) {
        res.status(500).json(err)
    }
})


module.exports = router