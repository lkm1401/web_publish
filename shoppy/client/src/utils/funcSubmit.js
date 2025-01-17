import { validateSignup } from './funcValidate.js';

/*************************************
 * Signup : submit 함수 
 *************************************/
export const submitSignup = (param) => {
    param.e.preventDefault();
        if(validateSignup(param.refs, param.msgRefs)) {
            console.log('submit ---->> ', param.formData);        
    }
}
