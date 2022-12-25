const mongoose = require("mongoose");


const MemeTagSchema = mongoose.Schema  ({
   
    Meme: {type: mongoose.Types.ObjectId, ref: "Meme"},
    Tag: {type: mongoose.Types.ObjectId, ref: "Tag"}
     
},{ timestamps: true })

module.exports = mongoose.model("MemeTagSchema",MemeTagSchema);