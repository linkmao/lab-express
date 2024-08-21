const {Schema, model}= require('mongoose')

const UserSchema = new Schema({
name:{type:String,required:true},
nickname:{type:String,required:true},
age:{type:Number,required:true},
role:{type:String,default:'user'}
},{versionKey:false})

module.exports=model('User',UserSchema)