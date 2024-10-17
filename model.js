const mongoose=require('mongoose');
const regschema = new mongoose.Schema({
    fname:{
        type:String,
        required:true,
    },
    lname:{
        type:String,
        required:true,
    },
    dob:{
        type:Date,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    phn:{
        type:Number,
        required:true,
    }
});

const regCollection=new mongoose.model('regCollection',regschema);

module.exports=regCollection;
