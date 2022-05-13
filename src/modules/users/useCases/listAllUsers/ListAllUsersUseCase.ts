import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const userTryingToFind = this.usersRepository.findById(user_id);
    if (!userTryingToFind) {
      throw new Error("Usuario não encontrado");
    } else if (!userTryingToFind.admin) {
      throw new Error("Esse usuario não possui permissões de admin!");
    }

    const allUsers = this.usersRepository.list();
    return allUsers;
  }
}

export { ListAllUsersUseCase, IRequest };
