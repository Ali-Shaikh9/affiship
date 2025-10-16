import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    imageUrl:String,
    name:{
        type:String,
        required:true,
        trim:true,
        unique:true,
        minLength:[ 3, 'User Name Must be 3 Characters Long']
    },
    email:{
        type:String,
        required:true,
        trim:true,
        lowercase:true,
        unique:true,
        minLength:[ 12, 'Email Must be 12 Characters Long']
    },
    password:{
        type:String,
        required:true,
        trim:true,
        minLength:[ 5, 'User Name Must be 5 Characters Long']
    },
})

const userModel =
  mongoose.models.user || mongoose.model("user", userSchema);

export default userModel;