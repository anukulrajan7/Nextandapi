import mongoose from 'mongoose';
// import { unique } from 'next/dist/build/utils';

const userSchema = new mongoose.Schema({
  username:{
    type : 'string',
    required: true,
    unique: true
  },
  email :{
    type : 'string',
     required: [true,"please enter a valid email address"],
     unique: true
  },
  password :{
    type : 'string',
    required: [true,"please enter a valid"]
  }
  ,
  isVerifed:{
    type : 'boolean',
    default: false,
  },
  isAdmin:{
    type : 'boolean',
    default: false,
  },
  forgotPasswordToken : String,
  forgotPasswordExpiry : Date,
verifyToken : String,
verifyTokenExpiry : Date,


})
const  User = mongoose.models.users  || mongoose.model('users',userSchema);
export default User;
