import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name : {
    type: String,
    required : true
  },
  email : {
    type : String,
    required : true,
    unique : true
  },
  password : {
    type : String,
    required : true,
  },

  cartData : {
    type : Object, default:{}
  },
  profilePicture:{
    type :String,
    default :"https://boostlikes-bc85.kxcdn.com/blog/wp-content/uploads/2019/08/No-Instagram-Profile-Pic.jpg"
  }
}, {minimize : false, timestamps : true})

const userModel = mongoose.model("user", userSchema)

export default userModel