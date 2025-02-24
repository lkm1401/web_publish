import express from 'express';
import cors from 'cors';
import path from 'path';
import memberRouter from './router/memberRouter.js';
import uploadRouter from './router/uploadRouter.js';
import productRouter from './router/productRouter.js';
import cartRouter from './router/cartRouter.js';
import orderRouter from './router/orderRouter.js';
import paymentRouter from './router/paymentRouter.js';

// 서버 생성 및 포트 정의
const server = express();
const port = 9000;


/** 서버의 공통적인 작업 */
server.use(express.json());
server.use(express.urlencoded());
server.use(cors());  
server.use("/upload_files", express.static(path.join("upload_files"))); //저장폴더 연결


/** 서버의 요청처리를 위한 미들웨어 정의 */
server.use('/member', memberRouter);
server.use('/uploads', uploadRouter);
server.use('/product', productRouter);
server.use('/cart', cartRouter);
server.use('/order', orderRouter);
server.use('/payment', paymentRouter);



server.listen(port, ()=>{
    console.log(`server port ===>> ${port}`);    
});
