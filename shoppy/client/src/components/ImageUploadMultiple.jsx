import React , {useState} from 'react';
import Form from 'react-bootstrap/Form';
import axios from 'axios';

export default function ImageUploadMultiple({getFileName}) {
    const [oldFile, setOldFile] = useState([]);

    const handleFileUploadMultiple = (e) => {
        const formData = new FormData();
        const files = e.target.files;
        console.log(files.length);
        
        
            //formData에 append - file 개별로 append 되어야함!!
            for(const file of files)  formData.append("files", file);
            formData.append("oldFile", oldFile);

            //서버전송 
            //파일업로드 제한없이 사용자가 선택한 갯수 만큼 전송==> ?maxFiles=${files.length}
            axios   
                .post(`http://localhost:9000/uploads/multiple?maxFiles=${files.length}`, formData, {
                    headers : { "Content-Type": "multipart/form-data" },
                })
                .then(res => {
                    getFileName(res.data);  //NewProduct 컴포넌트로 전송
                    setOldFile(res.data.oldFile);
                })
                .catch(error => console.log(error));        
    }
    

    return (
        <div>
            <Form.Control 
                        type="file"
                        onChange={(e)=>{handleFileUploadMultiple(e)}}
                        multiple />
        </div>
    );
}