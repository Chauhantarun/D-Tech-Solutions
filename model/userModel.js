import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
      trim: true,
    },
    email: {
      type: String,
      require: true,
      unique: true,
    },
    phone: {
      type: String,
      require: true,
    },
    company: {
      type: String,
      require: true,
    },
    city: {
      type: String,
      require: true,
    },
    state: {
      type: String,
      require: true,
    },
    country: {
      type: String,
      require: true,
    },
    pin: {
      type: String,
      require: true,
    },
    address1: {
      type: {},
      require: true,
    },
    address2: {
      type: {},
      require: true,
    },
    discription: {
      type: {},
      require: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Users", userSchema);
