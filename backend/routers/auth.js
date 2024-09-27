const express = require('express')
const User = require('../models/users')

const router = express.Router()

const jwt = require('jsonwebtoken')

router.post('/login', async (req, res) => {
  console.log(req.body)

  const findUser = await User.findOne({
    where: { login: req.body.login },
  })
  if (!findUser) {
    res
      .status(400)
      .json({ message: 'Пользователь с такими данными не существует' })
  } else {
    const token = jwt.sign(
      { login: req.body.login, password: req.body.password },
      'key'
    )
    res.status(200).json({
      userInfo: {
        id: findUser.id,
        login: findUser.login,
        mail: findUser.mail,
        name: findUser.name,
      },
      token: token,
    })
  }
})

router.post('/registration', async (req, res) => {
  console.log(req.body)

  const { name, login, password, mail } = req.body

  const findUser = await User.findOne({
    where: { login: login },
  })

  if (!findUser) {
    await User.create({
      name: name,
      mail: mail,
      login: login,
      password: password,
    })
    res.status(200).json({ message: 'Пользователь создан' })
  } else {
    res.status(400).json({ message: 'Пользователь с таким логином существует' })
  }
})

module.exports = router
