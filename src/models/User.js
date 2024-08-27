const {Schema, model}= require('mongoose')
const bcrypt= require('bcryptjs')

const UserSchema = new Schema({
name:{type:String,required:true},
nickname:{type:String,required:true},
age:{type:Number,required:true},
role:{type:String,default:'user'},
pass:{type:String,required:true}

},{versionKey:false})


UserSchema.statics.encryptPass =async (pass)=>{
  const salt = await bcrypt.genSalt(10)
  return  bcrypt.hash(pass,salt)
}

UserSchema.methods.comparePass = function(pass){
  return bcrypt.compare(pass,this.pass)
}

module.exports=model('User',UserSchema)