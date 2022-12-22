const mongoose = require("mongoose");


const TagsSchema = mongoose.Schema  ({
    name:{
        type:"String",
        required:true
    },
    description:{
        type:"String"
    }
     
},{ timestamps: true })

module.exports = mongoose.model("Tags",TagsSchema);