import { body } from "express-validator";

export const validateInstitueRegistration = [
  body("type")
    .trim()
    .isIn(["Playhouses", "School", "College", "Competitive Exam"])
    .withMessage("Invalid Institute Type"),
  body("details.board").if(
    body("type")
      .equals("School")
      .trim()
      .notEmpty()
      .withMessage("Board is required")
  ),
  body("details.medium").if(
    body("type")
      .equals("School")
      .trim()
      .notEmpty()
      .withMessage("Medium is required")
  ),
  body("details.classCategory").if(
    body("type")
      .equals("School")
      .trim()
      .notEmpty()
      .withMessage("Class category is required")
  ),
  body("details.standard").if(
    body("type")
      .equals("School")
      .trim()
      .notEmpty()
      .withMessage("Standard is required")
  ),
  body("details.subjects").if(
    body("type")
      .equals("School")
      .isArray({ min: 1 })
      .withMessage("Atleast one subject is required")
  ),
  body("details.university").if(
    body("type")
      .equals("College")
      .trim()
      .notEmpty()
      .withMessage("University is required")
  ),
  body("details.degreeType").if(
    body("type")
      .equals("College")
      .trim()
      .isIn(["Bachelor", "Master"])
      .withMessage("Degree type must be either Bachelor or Master")
  ),
];
