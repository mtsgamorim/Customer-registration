import UserService from "../services/userService.js";

class UserController {
  constructor() {
    this.createUser = this.createUser.bind(this);
    this.getUserByCpf = this.getUserByCpf.bind(this);
    this.getAllUsers = this.getAllUsers.bind(this);
  }

  async createUser(req, res) {
    const data = req.body;
    const validationError = await UserService.createUser(data);
    if (validationError) {
      res.status(validationError.statusCode).send(validationError.message);
    } else {
      res.status(201).send("Created");
    }
  }

  async getUserByCpf(req, res) {
    const { cpf } = req.params;
    const data = await UserService.getUserByCpf(cpf);
    if (data.statusCode !== 200) {
      res.status(data.statusCode).send(data.message);
    } else {
      res.status(data.statusCode).send(data.body);
    }
  }

  async getAllUsers(req, res) {
    const { page } = req.query;
    const data = await UserService.getUsers(page);
    if (data.message) {
      res.status(data.statusCode).send(data.message);
    } else {
      res.status(200).send(data);
    }
  }
}

export default new UserController();
