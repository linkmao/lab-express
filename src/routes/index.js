const {Router}= require('express')
const router = Router()

router.get('/',(req,res)=>{res.send("Estaes una solicitud desde un servidor web")})

router.get('/maolink',(req,res)=>{res.send("y esta es la pagina principal de maolink")})


router.put('/',(req,res)=>{
 const {name, age}=req.body
 console.log(name)
 console.log(process.env.mi_variable)
 res.send("ok")
}
)
module.exports= router