const mongoose = require("mongoose");


const MemeSchema = mongoose.Schema  ({
    title:{
        type:"String",
        required:true
    },
    path:{
        type:"String"
    },
    User: {type: mongoose.Types.ObjectId, ref: "User"},
    tags: {type: mongoose.Types.ObjectId, ref: "User"},
     
},{ timestamps: true })

module.exports = mongoose.model("Meme",MemeSchema);