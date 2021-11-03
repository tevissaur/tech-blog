const router = require('express').Router()
const User = require('../../models/User')


router.get('/', (req, res) => {
    res.send('user routes working!')
})


module.exports = router