const faviconError= require('../middleware/index')
const control = require('../controllers/index')
const {Router} = require('express')
const router = Router()
const passport=require('passport')

router.get('/',(req,res,next)=>{
  console.log(req.isAuthenticated())
  req.isAuthenticated() ? next() : res.redirect('/auth/login') 
},faviconError,control.getData)

// router.get('/',faviconError,control.getData)
router.get('/:i',control.getDataParams)
router.get('/auth/login',(req,res)=>res.render('login'))
router.post('/',control.newData)
router.post('/:i',control.newDataParams)
router.put('/:i',control.updateData)
router.delete('/:i',control.deleteData)
router.post('/auth/post',passport.authenticate('local',{
  successRedirect:'/',
  failureRedirect:'/auth/login'
}))

module.exports = router