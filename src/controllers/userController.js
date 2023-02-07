import UserService from "../services/userService.js";

class UserController {
  constructor() {
    this.createUser = this.createUser.bind(this);
  }

  createUser(req, res) {
    const cpf = req.body.cpf;
    const validationError = UserService.validateUser(cpf);
    if (validationError) {
      res.status(validationError.statusCode).send(validationError.message);
    } else {
      res.status(200).send("Created");
    }
  }
}

export default new UserController();
