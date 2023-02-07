class UserService {
  validateUser(cpf) {
    this.cpfValidator(cpf);
    this.verifyCpfInBD(cpf);
  }

  cpfValidator(cpf) {
    // aqui farei a validação do cpf
    console.log(cpf);
  }

  verifyCpfInBD(cpf) {
    // aqui verificarei se cpf ja existe no banco de dados
    console.log(cpf);
  }
}

export default new UserService();
