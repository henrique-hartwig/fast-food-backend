import { Router } from 'express';
import { OrderController } from './infrastructure/http/OrderController';
import { ProductCategoryController } from './infrastructure/http/ProductCategoryController';
import { ProductController } from './infrastructure/http/ProductController';

const router = Router();
const orderController = new OrderController();

router.post('/orders', orderController.createOrder);
router.get('/orders/:id', orderController.getOrderById);

const productCategoryController = new ProductCategoryController();
router.post('/product-categories', productCategoryController.createProductCategory);
router.get('/product-categories', productCategoryController.getAllProductCategories);
router.get('/product-categories/:id', productCategoryController.getProductCategoryById);

const productController = new ProductController();
router.post('/products', productController.createProduct);
router.get('/products', productController.getAllProducts);
router.get('/products/:id', productController.getProductById);
router.get('/products/category/:categoryId', productController.getProductsByCategoryId);
router.put('/products/:id', productController.updateProduct);

export { router as routes };
