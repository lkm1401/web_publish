import * as repository from '../repository/memberRepository.js';
import jwt from 'jsonwebtoken';

/**
 * 로그인 체크 : checkLogin
 */
export const checkLogin = async(req, res) => {
    // console.log('login data --->>', req.body);
    let jwt_token = '';
    let { result } = await repository.checkLogin(req.body);  

    if(result === 1) {  // 로그인 성공 : jwt 토큰 생성 ⭕ 
        jwt_token = jwt.sign({userId : req.body.id}, '5KldLlOVja');
        // console.log('token-->> ', jwt_token);        
    } 
    
    res.json({"result":result, "token":jwt_token});
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


