const mongoose= require('mongoose')

mongoose.connect(process.env.DB_URL).then(db=>console.log("Base de datos connecatda con exito"))
.catch(err=>console.log(err))
