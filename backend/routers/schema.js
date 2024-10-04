const express = require('express')
const Schema = require('../models/schema')
const Task = require('../models/tasks')

const router = express.Router()

router.get('/getSchemaById/:id', async (req, res) => {
  const { id } = req.params
  const findSchemaId = await Schema.findOne({
    where: { userId: id },
  })
  if (findSchemaId) {
    const tasks = await Task.findAll({
      where: { schemeId: findSchemaId.id },
    })
    return res.status(200).json({ schemeInfo: findSchemaId, tasks: tasks })
  } else {
    return res
      .status(400)
      .json({ message: 'Схемы не сущетвуте у данного пользователя' })
  }
})

module.exports = router
