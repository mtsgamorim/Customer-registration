class SchemaValidator {
  constructor(schema) {
    this.schema = schema;
    this.validateSchema = this.validateSchema.bind(this);
  }

  validateSchema(req, res, next) {
    const { error } = this.schema.validate(req.body, { abortEarly: false });
    if (error) {
      return res.status(422).send(error.details.map((e) => e.message));
    }
    next();
  }
}

export default SchemaValidator;
