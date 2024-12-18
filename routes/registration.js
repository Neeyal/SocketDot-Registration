import express from "express";
import { validateInstitueRegistration } from "../utils/validation.js";
import { validationResult } from "express-validator";
import School from "../models/school.js";
import College from "../models/college.js";
import CompetitiveExam from "../models/competitive-exam.js";

const router = express.Router();

router.post("/register", validateInstitueRegistration, async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      errors: errors.array(),
    });
  }

  try {
    const { type, details } = req.body;

    switch (type) {
      case "School":
        const { name, board, medium, classCategory, standard, subjects } =
          details;
        const school = new School({
          name,
          board,
          medium,
          classCategory,
          standard,
          subjects,
        });
        await school.save();
        res.status(201).json({
          message: "School registered successfully",
          data: school,
        });
        break;
      case "College":
        const { university, degreeType } = details;
        const college = new College({
          university,
          degreeType,
        });
        await college.save();
        res.status(201).json({
          message: "College registered successfully",
          data: college,
        });
        break;
      case "Competitive Exam":
        const { examName } = details;
        const competitiveExam = new CompetitiveExam({
          examName,
        });
        await competitiveExam.save();
        res
          .status(201)
          .json({ message: "Successfully registered competitive exam" });

      default:
        return res.status(400).json({ error: "invalid institute type" });
    }
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
});

router.get("/institute/:type", async (req, res) => {
  try {
    const { type } = req.params;

    switch (type) {
      case "School":
        const schools = await School.find();
        res.status(200).json(schools);
        break;
      case "College":
        const colleges = await College.find();
        res.status(200).json(colleges);
        break;
      case "Competitive Exam":
        const competitiveExam = await CompetitiveExam.find();
        res.status(200).json(competitiveExam);
        break;
      default:
        res.status(400).json({
          error: "invalid institute type",
        });
    }
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
});
export default router;
