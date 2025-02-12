import * as repository from '../repository/productRepository.js';

/**
 * 장바구니 상품 정보 조회
 */
export const getCartItems = async(req, res) => {
    const result = await repository.getCartItems(req.body);
    res.json(result);
    res.end();
}



/**
 * 상품 상세 정보 조회
 */
export const getProduct = async(req, res) => {
    const result = await repository.getProduct(req.body.pid);  // pid=3
    res.json(result);
    res.end();
}


/**
 * 전체 상품 리스트 조회
 */
export const getList = async(req, res) => {
    const result = await repository.getList();
    res.json(result);
    res.end();
}


/**
 * 상품 등록
 */
export const registerProduct = async(req, res) => {
    console.log('req.body--> ', req.body);
    const result = await repository.registerProduct(req.body); //레파지토리 함수
    res.json(result);
    res.end();
}    
