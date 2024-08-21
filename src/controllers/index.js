const User= require('../models/User.js')


const getData = async (req,res)=>{
  const users= await User.find()
  console.log(users)
  res.json(users)
}

const getDataParams = async (req,res)=>{
  const users= await User.findById(req.params.i)
  console.log(users)
  res.json(users)
}

const putData = async (req,res)=>{
  console.log(req.body)
  const newUser = new User(req.body)
  await newUser.save()
  res.send("Valores guardados en la base de datos "+ newUser)
}

const putDataParams = (req,res)=>{
  const data = req.params.i
  res.send("Valor PUT guardado, se toma como parametro: "+ data)
}

const postData = async (req,res)=>{
  const userUpdated = await User.findByIdAndUpdate(req.params.i,req.body,{new:true})
  res.json(userUpdated)
}

const deleteData= async (req,res)=>{
   const userDeleted= await User.findByIdAndDelete(req.params.i)
  res.json(userDeleted)
}

module.exports = {getData,getDataParams, putData, putDataParams,postData,deleteData}