const express = require('express')
const authMiddleweare = require('../middleweare/authMiddleweare')
const Task = require('../models/tasks')

const router = express.Router()

// router.get('/getSchemaById/:id', async (req, res) => {
//   console.log(req.params)
//   const { id } = req.params
//   const findSchemaId = await Schema.findOne({ where: { userId: id } })
//   console.log(findSchemaId)
//   return res.json(findSchemaId)
// })

router.post('/addTask', async (req, res) => {
  await Task.create({
    schemeId: 2,
    title: 'Начало',
    createdData: '02.10.2024',
    status: 'В процессе',
  })
  res.json('Что-то')
})

router.get('/getTasksBySchemeId/:id', async (req, res) => {
  const { id } = req.params
  const tasks = await Task.findAll({
    where: { schemeId: id },
  })

  res.json(tasks)
})

module.exports = router
