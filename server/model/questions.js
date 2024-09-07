import mongoose from "mongoose";
const questions = new mongoose.Schema({
      question :{
          type: String,
          required: true,
      },
      choice1:{
          type: String,
          default : ""
      },
      choice2:{
         type: String,
         default : ""
      },
      choice3:{
         type: String,
         default : ""
      },
      choice4:{
         type: String,
         default : ""
      },          
      answer:{
          type:String,
          required : true
      },
      reference:{
         type:String
      }
    } 
);
const Question = mongoose.model("Question",questions);
export default Question;