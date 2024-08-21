const control = require('../controllers/index')

const {Router} = require('express')
const router = Router()

router.get('/',control.getData)
router.get('/:i',control.getDataParams)
router.put('/',control.putData)
router.put('/:i',control.putDataParams)
router.post('/:i',control.postData)
router.delete('/:i',control.deleteData)

module.exports = router