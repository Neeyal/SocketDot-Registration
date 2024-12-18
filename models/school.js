import mongoose from "mongoose";

const schoolSchema = new mongoose.Schema({
  name: { type: String, required: true },
  board: { type: String, required: true },
  medium: { type: String, required: true },
  classCategory: { type: String, required: true },
  standard: { type: String, required: true },
  subjects: { type: [String], required: true },
});

export default mongoose.model("School", schoolSchema);
