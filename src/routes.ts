import { Router } from 'express';
import { OrderController } from './infrastructure/http/OrderController';

const router = Router();
const orderController = new OrderController();

router.post('/orders', orderController.createOrder);
router.get('/orders/:id', orderController.getOrderById);

export { router as routes };