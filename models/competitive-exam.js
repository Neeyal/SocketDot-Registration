import mongoose from "mongoose";

const competitiveExamSchema = new mongoose.Schema({
  examName: { type: String, required: true },
});

export default mongoose.model("Competitive-exam", competitiveExamSchema);
