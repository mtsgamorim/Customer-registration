import UserService from "../services/userService.js";

class UserController {
  constructor() {
    this.createUser = this.createUser.bind(this);
  }

  createUser(req, res) {
    UserService.validateUser(req.body.cpf);
    res.status(200).send("Created");
  }
}

export default new UserController();
