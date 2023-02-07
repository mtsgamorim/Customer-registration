import { Router } from "express";
import userController from "../controllers/userController.js";
import SchemaValidator from "../middlewares/schemasValidator.js";
import userSchema from "../schemas/userSchema.js";

const userRouter = Router();
const userSchemaValidator = new SchemaValidator(userSchema);

userRouter.post(
  "/customer",
  userSchemaValidator.validateSchema,
  userController.createUser
);

userRouter.get("/customer/:cpf", userController.getUserByCpf);

userRouter.get("/allcustomers", userController.getAllUsers);

export default userRouter;
