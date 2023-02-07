import joi from "joi";

const userSchema = joi.object({
  name: joi.string().required(),
  cpf: joi
    .string()
    .regex(/^(\d{3}\.?\d{3}\.?\d{3}\-?\d{2})$/)
    .required(),
  birthday: joi.date().required(),
});

export default userSchema;
