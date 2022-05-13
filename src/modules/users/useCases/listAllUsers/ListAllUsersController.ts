import { Request, Response } from "express";

import { ListAllUsersUseCase, IRequest } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    const { user_id } = request.headers;
    try {
      const allUsers = this.listAllUsersUseCase.execute({
        user_id,
      } as IRequest);
      return response.json(allUsers);
    } catch (e) {
      return response.status(400).json({ error: e.message });
    }
  }
}

export { ListAllUsersController };
