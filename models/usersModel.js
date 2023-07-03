import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please Enter Your Name"],
    maxLength: [30, "Name Cannot Exceed 30 Character"],
    minLength: [4, "Name Should Have More Than 4 Character"],
  },
  email: {
    type: String,
    required: [true, "Please Enter Your Email"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Please Enter Your Password"],
    minLength: [8, "Password Should Be Greater Than 8 Character"],
  },
  role: {
    type: String,
    default: "user",
  }
},
{
  timestamps: true,
});

export default mongoose.model("Users", userSchema);
