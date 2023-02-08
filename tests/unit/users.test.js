import { jest } from "@jest/globals";
import userService from "../../src/services/userService";
import data from "../factory/userFactory";
import userRepository from "../../src/repositories/userRepository";

beforeEach(() => {
  jest.resetAllMocks();
  jest.clearAllMocks();
});

describe("Tests on function createUser", () => {
  it("Sucess test", async () => {
    jest.spyOn(userRepository, "create").mockImplementationOnce(() => {});
    await userService.createUser(data);
    expect(userRepository.create).toBeCalled();
  });
  it("Case cpf invalid, must return statusCode 422", async () => {
    const user = data;
    user.cpf = "25365895642";
    const result = await userService.createUser(user);
    expect(result.statusCode).toEqual(422);
  });
  it("Case cpf already exists in DB, must return statusCode 409", async () => {
    const user = data;
    user.cpf = "476.890.570-63";
    jest.spyOn(userService, "verifyCpfInBD").mockImplementationOnce(() => true);
    const result = await userService.createUser(user);
    expect(result.statusCode).toEqual(409);
  });
});

describe("Tests on function getUserByCpf", () => {
  it("Case sucess", async () => {
    jest.spyOn(userRepository, "findByCpf").mockImplementationOnce(() => true);
    const result = await userService.getUserByCpf(data.cpf);
    expect(result.statusCode).toEqual(200);
    expect(result.body).toEqual(true);
  });

  it("Case cpf parameter is invalid, must return statusCode 422", async () => {
    const result = await userService.getUserByCpf("word");
    expect(result.statusCode).toEqual(422);
  });

  it("Case user not registred, must return statusCode 404", async () => {
    jest.spyOn(userRepository, "findByCpf").mockImplementationOnce(() => false);
    const result = await userService.getUserByCpf(data.cpf);
    expect(result.statusCode).toEqual(404);
  });
});

describe("Tests on function getUsers", () => {
  it("Case sucess without page, must return all data", async () => {
    jest.spyOn(userRepository, "findAll").mockImplementationOnce(() => {});
    await userService.getUsers(undefined);
    expect(userRepository.findAll).toBeCalled();
  });
  it("Case sucess with page", async () => {
    jest
      .spyOn(userRepository, "findAllWithPage")
      .mockImplementationOnce(() => {});
    await userService.getUsers(2);
    expect(userRepository.findAllWithPage).toBeCalled();
  });
  it("Case page is not a number, must return statusCode 400", async () => {
    const result = await userService.getUsers("text");
    expect(result.statusCode).toEqual(400);
  });
  it("Case page is a invalid number, must return statusCode 400", async () => {
    const result = await userService.getUsers(-1);
    expect(result.statusCode).toEqual(400);
  });
});
