import UserService from "../services/userService.js";

class UserController {
  constructor() {
    this.createUser = this.createUser.bind(this);
  }

  async createUser(req, res) {
    const data = req.body;
    const validationError = await UserService.createUser(data);
    if (validationError) {
      res.status(validationError.statusCode).send(validationError.message);
    } else {
      res.status(200).send("Created");
    }
  }
}

export default new UserController();
