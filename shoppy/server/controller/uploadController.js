import multer from 'multer';

//multer 라이브러리로 파일을 업로드 폴더에 저장
const storage = multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, 'upload_files/')
        },
        filename: function (req, file, cb) {
            const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
            cb(null, uniqueSuffix + "-" + file.originalname);
        }
    })

const upload = multer({ storage: storage }).single("file");


/**
 * 파일업로드 실행 함수
 */
export const fileUpload = (req, res) => {
    upload(req, res, (err)=>{
        if(err){
            console.log(err);            
        } else {
            res.json({
                "uploadFileName": res.req.file.path,
                "sourceFileName": req.file.originalname
            });
        }
    });    

}