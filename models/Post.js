const mongoose = require('mongoose')
const Schema = mongoose.Schema

const PostSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref:'users'
    },
    text:{
        type:String,
        required:true
    },
    model:{
        type:String
    },
    year:{
        type:Number 
    },
    price:{
        type: Number
        },
    location:{
        type: String
    },
    date:{
        type:Date,
        default:Date.now
    }
});

module.exports = Post = mongoose.model('post',PostSchema);