const express = require('express')

const app = express()

const sequelize = require('./config/db')
const cors = require('cors')

const auth = require('./routers/auth')
const task = require('./routers/task')
const schema = require('./routers/schema')

app.use(express.json())
app.use(cors())

app.use('/api', auth)
app.use('/api', schema)
app.use('/api', task)

sequelize
  .sync()
  .then(() => {
    console.log('Database connected')
    app.listen(5000, () => {
      console.log('Server started')
    })
  })
  .catch((err) => console.log(err))
