import prisma from './prisma/prismaClient';
import type { IOrderRepository } from '../../application/ports/IOrderRepository';
import { Order } from '../../domain/entities/Order';

export class PgOrderRepository implements IOrderRepository {
  async save(order: Order): Promise<void> {
    await prisma.order.create({
      data: {
        items: JSON.stringify(order.items),
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

    return new Order(orderData.id, JSON.parse(orderData.items), orderData.total);
  }
}
