import express from 'express';
import * as controller from '../controller/productController.js';

const router = express.Router();

router
    .get('/all', controller.getList )
    .post('/new', controller.registerProduct)
    .post('/detail', controller.getProduct);

export default router;