const mongoose =require("mongoose")

const courseSchema = new mongoose.Schema({
    courseName:{
        type:String,
        required:true,
        Unique:true,
    },

    coursecode:{
        type:String,
        required:true,
        Unique:true,
    },

    Credits:{
        type:Number,
        required:true,
    },

    Hours:{
        type:Number,
        required:true,
    },

    Description:{
        type:String,
        required:true,
    },

    Faculty:{
        type:String,
        required:true,
    }

},
{timestamps:true}
);

module.exports = new mongoose.model("Course",courseSchema);
