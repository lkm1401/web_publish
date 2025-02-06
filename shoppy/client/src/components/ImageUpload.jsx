import React from 'react';
import Form from 'react-bootstrap/Form';
import axios from 'axios';

export default function ImageUpload({getFileName}) {
    const formData = new FormData();

    const handleFileUpload = (e) => {
        formData.append("file", e.target.files[0]);

        axios
            .post('http://localhost:9000/uploads', formData)
            .then(res => {
                getFileName(res.data);
            })
            .catch(error => console.log(error));
    }

    return (
        <div>
            <Form.Control 
                type="file"
                onChange={(e)=>{handleFileUpload(e)}}
                />
        </div>
    );
}

