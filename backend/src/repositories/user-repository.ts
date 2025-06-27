import prisma from "../config/prisma-config";

import { CrudRepository } from "./crud-repository";

class UserRepository extends CrudRepository<typeof prisma.user>{
    constructor(){
        super(prisma.user)
    };

    async findByEmail(email: string) {
    return this.model.findUnique({
      where: { email },
    });

  }

}
export { UserRepository };

// const userRepository = new