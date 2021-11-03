const router = require('express').Router()
const Post = require('../../models/Post')


router.get('/', (req, res) => {
    res.send('post routes working!')
})


module.exports = router