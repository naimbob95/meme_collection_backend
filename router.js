const express = require("express")
const router = express.Router()
const TagsController = require('./Controllers/TagsController')
const AuthController = require('./Controllers/AuthController')
const {isLogin } = require("./Controllers/AuthController")


router.get('/',(req,res)=>{
    res.send("Hello World");
})

//  Tags CRUD
router.post('/tags/create',TagsController.createTag);
router.get('/tags',TagsController.getAllTags)
router.get('/tags/:id',TagsController.getTag)
router.put('/tags/:id',TagsController.UpdateTag)
router.delete('/tags/:id',TagsController.DeleteTag)


//Auth
router.post('/signup',AuthController.signup)
router.post('/login',AuthController.login)


router.get('/isLogin',isLogin,(req,res)=>{
    res.send("A protected route")
    res.json(req.auth)
    })

module.exports = router