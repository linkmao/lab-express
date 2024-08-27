const User= require('../models/User.js')


const getData = async (req,res)=>{
  const users= await User.find()
  res.status(200).json(users)
}

const getDataParams = async (req,res)=>{
  const users= await User.findById(req.params.i)
  console.log(users)
  res.json(users)
}

const newData = async (req,res)=>{
  const {name,nickname,age,role,pass} = req.body
  const newUser = new User({name,nickname, age, role, pass:await User.encryptPass(pass)})
  await newUser.save()
  res.send("Valores guardados en la base de datos "+ newUser)
}

const newDataParams = (req,res)=>{
  const data = req.params.i
  res.send("Valor PUT guardado, se toma como parametro: "+ data)
}

const updateData = async (req,res)=>{
  const userUpdated = await User.findByIdAndUpdate(req.params.i,req.body,{new:true})
  res.json(userUpdated)
}

const deleteData= async (req,res)=>{
   const userDeleted= await User.findByIdAndDelete(req.params.i)
  res.json(userDeleted)
}

module.exports = {getData,getDataParams, newData, newDataParams,updateData,deleteData}