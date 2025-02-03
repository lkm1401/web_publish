import express from 'express';
import mainRouter from './router/mainRouter.js';
import helloRouter from './router/helloRouter.js';
import employeeRouter from './router/employeeRouter.js';
import cors from 'cors';

// 서버 생성 및 포트 정의
const server = express();
const port = 9000;

/** 서버의 공통적인 작업 */
server.use(express.json());
server.use(express.urlencoded());
server.use(cors());  


/** 서버의 요청처리를 위한 미들웨어 정의 */
server.use('/', mainRouter);
server.use('/hello', helloRouter); 
server.use('/employee', employeeRouter);




server.listen(port, ()=>{
    console.log(`server port ===>> ${port}`);    
});

