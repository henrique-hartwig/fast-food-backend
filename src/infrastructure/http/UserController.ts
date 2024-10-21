import { UserService } from '../../application/services/UserService';
import { PgUserRepository } from '../database/repository/PgUserRepository';

const userRepository = new PgUserRepository();
const userService = new UserService(userRepository);

export class UserController {
  async createUser(req: any, res: any) {
    const { name, email, cpf } = req.body;
    await userService.createUser(name, email, cpf);
    res.status(201).json({ message: 'User created successfully!' });
  }

  async getUserByCpf(req: any, res: any) {
    const user = await userService.getUserByCpf(req.params.cpf);
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  }
}
