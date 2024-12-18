import mongoose from "mongoose";

const collegeSchema = new mongoose.Schema({
  university: { type: String, required: true },
  degreeType: { type: String, enum: ["Bachelor", "Master"], required: true },
});

export default mongoose.model("College", collegeSchema);
