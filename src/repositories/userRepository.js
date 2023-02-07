import prisma from "../database/prismaClient";

class UserRepository {
  async create(body) {
    await prisma.customers.create({ body });
  }

  async findByCpf(cpf) {
    const customers = await prisma.customers.findUnique({
      where: {
        cpf,
      },
    });
    return customers;
  }
}

export default new UserRepository();
