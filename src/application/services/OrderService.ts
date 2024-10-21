import type { IOrderRepository } from '../ports/IOrderRepository';
import { Order } from '../../domain/entities/Order';

export class OrderService {
  constructor(private orderRepository: IOrderRepository) {}

  async createOrder(items: string[], total: number): Promise<void> {
    const order = new Order(Date.now(), items, total);
    await this.orderRepository.save(order);
  }

  async getOrderById(id: number): Promise<Order | null> {
    return this.orderRepository.findById(id);
  }
}
