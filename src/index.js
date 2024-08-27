const express = require('express')
const dotenv = require ('dotenv')
const path = require('path')
const favicon = require('serve-favicon')
const index = require('./routes/index')
const session = require('express-session')
dotenv.config()
const passport= require('passport')
const app = express()
const cookieParser= require('cookie-parser')

app.use(express.json())
app.set('PORT',process.env.PORT)

app.use(express.urlencoded({extended:true}))

app.set('view engine','ejs')

require('./config/bd')
require('./config/passport')

// app.use(cookieParser('cualquier'))
app.use(session({
  secret: 'cualquier',
  resave: true,
  saveUninitialized: true
}))

app.use(passport.initialize())
app.use(passport.session())

app.listen(app.get('PORT'),  ()=>{
  console.log("app escucando en el puerto "+ app.get('PORT'))
 })

app.get('/favicon.ico', (req, res) => res.status(204).end())
app.use('/',index)

