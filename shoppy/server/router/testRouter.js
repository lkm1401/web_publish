import express from 'express';
import * as controller from '../controller/testController.js';

const router = express.Router();

/** router 정보 매핑 */
router.get('/', controller.getTest);   //  /test
router.get('/product', controller.getTestProduct);   //  /test/product

export default router;