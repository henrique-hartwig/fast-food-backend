import type { IUserRepository } from '../ports/IUserRepository';
import { User } from '../../domain/entities/User';

export class UserService {
  constructor(private userRepository: IUserRepository) {}

  async createUser(name: string, email: string, cpf: string): Promise<void> {
    const user = new User(Date.now(), name, email, cpf);
    await this.userRepository.save(user);
  }

  async getUserByCpf(cpf: string): Promise<User | null> {
    return this.userRepository.findByCpf(cpf);
  }
}
