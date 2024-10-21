import prisma from './prisma/prismaClient';
import type { IOrderRepository } from '../../application/ports/IOrderRepository';
import { Order } from '../../domain/entities/Order';

export class PgOrderRepository implements IOrderRepository {
  async save(order: Order): Promise<void> {
    await prisma.order.create({
      data: {
        id: order.id,
        items: order.items.join(','),
        total: order.total,
      },
    });
  }

  async findById(id: number): Promise<Order | null> {
    const orderData = await prisma.order.findUnique({
      where: { id },
    });

    if (!orderData) {
      return null;
    }

    return new Order(orderData.id, orderData.items.split(','), orderData.total);
  }
}
