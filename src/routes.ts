import { Router } from 'express';
import { OrderController } from './infrastructure/http/OrderController';
import { ProductCategoryController } from './infrastructure/http/ProductCategoryController';

const router = Router();
const orderController = new OrderController();

router.post('/orders', orderController.createOrder);
router.get('/orders/:id', orderController.getOrderById);

const productCategoryController = new ProductCategoryController();
router.post('/product-categories', productCategoryController.createProductCategory);
router.get('/product-categories', productCategoryController.getAllProductCategories);
router.get('/product-categories/:id', productCategoryController.getProductCategoryById);

export { router as routes };
