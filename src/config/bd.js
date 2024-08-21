const mongoose = require('mongoose')
mongoose.connect(process.env.DB_URL)
.then(db=>console.log("base de datos conectada con exito, info"))
.catch(err=>console.log(err))