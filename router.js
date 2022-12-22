const express = require("express")
const router = express.Router()
const TagsController = require('./Controllers/TagsController')

router.get('/',(req,res)=>{
    res.send("Hello World");
})

router.post('/tags/create',TagsController.createTag);
router.get('/tags',TagsController.getAllTags)
router.get('/tags/:id',TagsController.getTag)
router.put('/tags/:id',TagsController.UpdateTag)
router.delete('/tags/:id',TagsController.DeleteTag)


module.exports = router