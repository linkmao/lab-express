const express = require('express')
const app= express()
const entorno = require('dotenv')


const rutas = require('./routes/index')

entorno.config()
app.set('port',3000)

require('./config/db') // Se importa la configuracionde la base de datos
app.use(express.json()) // Este midleware permite que se pueda enviar json desde postman

app.use('/',rutas)


app.listen(app.get('port'),()=>{console.log("Servidor escuchando en el puerto "+ app.get('port') )})