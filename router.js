const express = require("express")
const router = express.Router()
const TagsController = require('./Controllers/TagsController')
const AuthController = require('./Controllers/AuthController')
const {isLogin } = require("./Controllers/AuthController")


router.get('/',(req,res)=>{
    res.send("Meme collection backend");
})

//Auth
router.post('/signup',AuthController.signup)
router.post('/login',AuthController.login)


//  Tags CRUD
router.post('/tags/create',isLogin,TagsController.createTag);
router.get('/tags',isLogin, TagsController.getAllTags)
router.get('/tags/:id',isLogin,TagsController.getTag)
router.put('/tags/:id',isLogin,TagsController.UpdateTag)
router.delete('/tags/:id',isLogin,TagsController.DeleteTag)





module.exports = router