import { OrderService } from '../../application/services/OrderService';
import { PgOrderRepository } from '../database/PgOrderRepository';

const orderRepository = new PgOrderRepository();
const orderService = new OrderService(orderRepository);

export class OrderController {
  async createOrder(req: any, res: any) {
    const { items, total } = req.body;
    await orderService.createOrder(items, total);
    res.status(201).json({ message: 'Order created successfully!' });
  }

  async getOrderById(req: any, res: any) {
    const order = await orderService.getOrderById(req.params.id);
    if (order) {
      res.json(order);
    } else {
      res.status(404).json({ message: 'Order not found' });
    }
  }
}
