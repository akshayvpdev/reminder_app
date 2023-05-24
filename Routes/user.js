const express = require('express')
const usercontroller=require('../controllers/user-controller')
const router=express.Router()
const middleware=require('../middleware/auth')



router.post('/register',usercontroller.register);

router.post('/login',usercontroller.login);

router.post('/add',middleware.appMiddleware, usercontroller.addReminder)

router.get('/view/:id',usercontroller.viewReminders)

router.post('/delete_item',middleware.appMiddleware,usercontroller.deletereminder);
















module.exports=router