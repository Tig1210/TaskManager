const express = require('express')

const app = express()

const sequelize = require('./config/db')
const cors = require('cors')

const auth = require('./routers/auth')

app.use(express.json())
app.use(cors())

app.use('/api', auth)

sequelize
  .sync()
  .then(() => {
    console.log('Database connected')
    app.listen(5000, () => {
      console.log('Server started')
    })
  })
  .catch((err) => console.log(err))
