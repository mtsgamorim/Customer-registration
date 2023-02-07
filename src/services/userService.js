import userRepository from "../repositories/userRepository.js";

class UserService {
  async createUser(data) {
    const newCpf = this.cpfFormatter(data.cpf);
    const isValid = this.cpfValidator(newCpf);
    const alreadyExist = await this.verifyCpfInBD(newCpf);
    if (!isValid) {
      return {
        message: "Invalid CPF",
        statusCode: 422,
      };
    }
    if (alreadyExist) {
      return {
        message: "Customer already exists",
        statusCode: 409,
      };
    }

    userRepository.create({
      name: data.name,
      cpf: newCpf,
      birthday: data.birthday,
    });
  }

  cpfFormatter(cpf) {
    const newCpf = cpf.replace(/\D/g, "");
    return newCpf;
  }

  cpfValidator(cpf) {
    const firstVerifyDigit = Number(cpf[9]);
    const secondVerifyDigit = Number(cpf[10]);
    let obrigatoryFirstDigit;
    let obrigatorySecondDigit;

    let modulus;
    let cont = 2;
    let sum = 0;

    for (let i = 8; i >= 0; i--) {
      sum += cpf[i] * cont;
      cont++;
    }
    modulus = sum % 11;
    if (modulus < 2) {
      obrigatoryFirstDigit = 0;
    } else {
      obrigatoryFirstDigit = 11 - modulus;
    }

    sum = 0;
    cont = 2;
    for (let i = 9; i >= 0; i--) {
      sum += cpf[i] * cont;
      cont++;
    }
    modulus = sum % 11;
    if (modulus < 2) {
      obrigatorySecondDigit = 0;
    } else {
      obrigatorySecondDigit = 11 - modulus;
    }

    return !!(
      firstVerifyDigit === obrigatoryFirstDigit &&
      secondVerifyDigit === obrigatorySecondDigit
    );
  }

  async verifyCpfInBD(cpf) {
    const customer = await userRepository.findByCpf(cpf);
    return !!customer;
  }
}

export default new UserService();
