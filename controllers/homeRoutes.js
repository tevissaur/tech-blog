const router = require('express').Router()


router.get('/', (req, res) => {
    res.send('home routes working!')
})


module.exports = router