const express = require('express')
const dotenv = require ('dotenv')
const index = require('./routes/index')
dotenv.config()
const app = express()
app.use(express.json())
app.set('PORT',process.env.PORT)


require('./config/bd')

app.listen(app.get('PORT'), ()=>console.log("app escucando en el puerto "+ app.get('PORT')))

app.use('/',index)
