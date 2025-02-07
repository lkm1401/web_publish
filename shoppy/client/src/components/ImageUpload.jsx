import React, {useState} from 'react';
import Form from 'react-bootstrap/Form';
import axios from 'axios';

export default function ImageUpload({getFileName}) {
    const [oldFile, setOldFile] = useState("");
    const formData = new FormData();

    const handleFileUpload = (e) => {
        formData.append("file", e.target.files[0]); //새로운 파일 b.png
        formData.append("oldFile", oldFile);  //이전 파일 a.png

        axios
            .post('http://localhost:9000/uploads', formData , {
                headers : { "Content-Type": "multipart/form-data" },  
            })
            .then(res => {
                getFileName(res.data);
                setOldFile(res.data.oldFile);
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

