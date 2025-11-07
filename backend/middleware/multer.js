import multer from 'multer';
import { storage } from '../config/cloudinary.js';
// const storage = multer.diskStorage({
//     filename:function(req,file,callback){
//         callback(null,file.originalName)
//     }
// })


// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, 'uploads/'); // must exist
//   },
//   filename: function (req, file, cb) {
//     const ext = path.extname(file.originalname);
//     cb(null, `${file.fieldname}-${Date.now()}${ext}`);
//   }
// });

const upload = multer({ storage });

export default upload;
