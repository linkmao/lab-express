const express = require('express')
const app= express()

const rutas = require('./routes/index')

app.set('port',3000)


app.use(express.json()) // Este midleware permite que se pueda enviar json desde postman

app.use('/',rutas)


app.listen(app.get('port'),()=>{console.log("Servidor escuchando en el puerto "+ app.get('port') )})