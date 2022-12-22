const Tags = require("../model/Tag");


exports.createTag = async(req,res)=>{
    var desc = "-";
    if (req.body.description != undefined) desc = req.body.description ;
    const tag = new Tags({
        name: req.body.name,
        description: desc
    })

    try{
        const tagSave = await tag.save();
        res.json(tagSave);
    } catch(error){
        console.log(error);
    }
}

exports.getAllTags = async (req,res)=>{

    try{
        const tags = await Tags.find().sort({createdAt:-1})
        res.json(tags)
    } catch(error){
        console.log(error);
    }
}

exports.getTag = async (req,res)=>{

    try{

        const tag = await Tags.findById(req.params.id)

        res.json(tag)

    } catch(error){
        console.log(error);
    }
}

exports.UpdateTag = async(req,res) => {


    try{
        const tag = await Tags.findOneAndUpdate(req.params.id,req.body,{new:true})

        res.json(tag);
    } catch(error){
        console.log(error);
    }
}

exports.DeleteTag = async (req,res) =>{
    try{
        const tagDeleted = await Tags.findByIdAndRemove(req.params.id)
        res.json(tagDeleted)
    }   catch(error){
        console.log(error)
    }
}