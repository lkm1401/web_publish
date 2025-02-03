import express from 'express';
// import { getHello, getHelloTest } from '../controller/helloController.js';
import * as controller from '../controller/helloController.js';

export const router = express.Router();

router.get('/', controller.getHello);  
router.get('/test', controller.getHelloTest);



export default router;