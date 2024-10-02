const express = require('express')
const authMiddleweare = require('../middleweare/authMiddleweare')
const Schema = require('../models/sh')
const Task = require('../models/tasks')

const router = express.Router()

router.get('/tasksBySchemeId/:id', async (req, res) => {
  console.log(req.params)
  const findSchemaId = await Schema.findOne({ where: { userId: 1 } })
  console.log(findSchemaId)
  return res.json(findSchemaId)
})

router.post('/addTask', async (req, res) => {
  await Task.create({
    schemeId: 1,
    title: 'Начало',
    createdData: '02.10.2024',
    status: 'В процессе',
  })
  res.json('Что-то')
})

router.get('/getTasksBySchemeId/:id', async (req, res) => {
  const tasks = await Task.findAll({
    where: { schemeId: 1 },
  })

  res.json(tasks)
})

module.exports = router
