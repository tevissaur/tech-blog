const { User } = require('../models')

const userData = [
    {
        name: "tevissaur",
        email: "tevis@email.com",
        password: "pass12345"
    },
    {
        name: "mikumon",
        email: "mikumon@email.com",
        password: "pass12345"
    },
    {
        name: "shengully",
        email: "shen@email.com",
        password: "pass12345"
    },
]

const seedUsers = () => User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  })


module.exports = seedUsers