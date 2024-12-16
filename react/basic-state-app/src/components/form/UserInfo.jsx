import React, {useState, useRef} from 'react';
import { validateForm } from '../../apis/validate.js';

export default function UserInfo() {
    const refs = {
        nameRef: useRef(null),
        addressRef: useRef(null),
        ageRef: useRef(null)
    };

    const init = {'name':'', 'address':'', 'age':''};
    const [formData, setFormData] = useState(init);

    const handleChangeForm = (event) => {
        const {name, value} = event.target;
        setFormData({...formData, [name]:value});
    }

    const handleSubmit = (event) => {
        event.preventDefault();        
        if(validateForm(refs)) console.log(formData);        
    }

    return (
        <div>
            <h1>UserInfo</h1>
            <form onSubmit={handleSubmit}>
                <ul>
                    <li>
                        <label htmlFor="">Name</label>
                        <input  type="text"
                                name="name"
                                value={formData.name}
                                ref={refs.nameRef}
                                onChange={handleChangeForm}
                                />
                    </li>
                    <li>
                        <label htmlFor="">Address</label>
                        <input  type="text"
                                name="address"
                                value={formData.address}
                                ref={refs.addressRef}
                                onChange={handleChangeForm}
                                />
                    </li>
                    <li>
                        <label htmlFor="">Age</label>
                        <input  type="text"
                                name="age"
                                value={formData.age}
                                ref={refs.ageRef}
                                onChange={handleChangeForm}
                                />
                    </li>
                    <li>
                        <button type="submit">Send</button>
                    </li>
                </ul>
            </form>
        </div>
    );
}

