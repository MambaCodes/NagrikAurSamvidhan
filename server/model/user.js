import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
    default: "", 
  },
  gamesPlayed: {
    type: Number,
    default: 0,
  },
  highScores: {
    type: Map,
    of: Number, 
    default: {},
  },
  achievements: [{
    type: String,
  }],
  coins: {
    type: Number,
    default: 0, 
  },
  level: {
    type: Number,
    default: 1, 
  },
  progress: [{
    gameId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Game", 
    },
    levelReached: {
      type: Number,
      default: 1,
    },
    lastPlayed: {
      type: Date,
      default: Date.now,
    }
  }],
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

const User = mongoose.model("User", userSchema);

export default User;
