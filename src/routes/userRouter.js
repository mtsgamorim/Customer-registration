import { Router } from "express";
import userController from "../controllers/userController.js";
import SchemaValidator from "../middlewares/schemasValidator.js";
import userSchema from "../schemas/userSchema.js";

const userRouter = Router();
const userSchemaValidator = new SchemaValidator(userSchema);

userRouter.post(
  "/create",
  userSchemaValidator.validateSchema,
  userController.createUser
);

userRouter.get("");

userRouter.get("");

export default userRouter;
