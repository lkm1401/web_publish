import * as repository from '../repository/memberRepository.js';
import jwt from 'jsonwebtoken';

/**
 * 로그인 : checkLogin
 */
export const checkLogin = async(req, res) => {
    let result = await repository.checkLogin(req.body); // result_rows=1

    if(result.result_rows === 1) {
        //keygen 사이트 : https://randomkeygen.com/
        const token = jwt.sign({"userId":req.body.id}, 'moJQzU5U3I');
        result = {...result, "token": token};        
    }
    res.json(result);
    res.end();
}


/**
 * 아이디 중복체크 : getIdCheck
 */
export const getIdCheck = async(req, res) => {
    const result = await repository.getIdCheck(req.body);
    res.json(result);
    res.end();
}


/**
 * 회원가입 : registerMember
 */
export const registerMember = async(req, res) => {
    const formData = req.body;
    const result = await repository.registerMember(formData);
    res.json(result);
    res.end();
}


