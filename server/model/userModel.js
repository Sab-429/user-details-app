import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name:{
        type : String,
        requirerd : true
    },
    email:{
        type : String,
        requirerd : true
    },
    address:{
        type : String,
        requirerd : true
    }
})
export default mongoose.model("User", userSchema);