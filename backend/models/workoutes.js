import mongoose from "mongoose";

const workoutes = mongoose.Schema(
  {
    title: { type: String, required: true },
    reps: { type: Number, required: true },
    load: { type: Number, required: true },
    userId: {type:String, required: true}
  },
  { timestamps: true }
);

const model = mongoose.model("workout", workoutes)

export default model
