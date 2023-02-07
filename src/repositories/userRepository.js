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

  async findAllWithPage(limit, skip) {
    const customers = await prisma.customers.findMany({
      skip,
      take: limit,
    });
    return customers;
  }

  async findAll() {
    const customers = await prisma.customers.findMany();
    return customers;
  }
}

export default new UserRepository();
