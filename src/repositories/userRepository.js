import prisma from "../database/prismaClient.js";

class UserRepository {
  async create(data) {
    await prisma.customers.create({ data });
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
