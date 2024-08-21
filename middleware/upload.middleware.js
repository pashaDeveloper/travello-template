import multer from "multer";
import path from "path";
import crypto from "crypto";

// تنظیمات ذخیره‌سازی محلی
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    // مسیر پوشه که در درخواست ارسال شده است
    const uploadFolder = req.body.folder || 'uploads';
    cb(null, path.join(process.cwd(), 'public', uploadFolder));
  },
  filename: (req, file, cb) => {
    // نام فایل
    const prefix = req.body.prefix || '';
    const hashedName = crypto.randomBytes(16).toString('hex'); // ایجاد نام هش‌شده
    const originalName = file.originalname.replace(/[^\w\s.-]/g, "").replace(/\s+/g, "-").toLowerCase();
    const filename = `${prefix}_${hashedName}${path.extname(file.originalname)}`;

    // ایجاد مسیر نسبی و ذخیره آن در req.body
    const relativePath = path.join(req.body.folder || 'uploads', filename).replace(/\\/g, "/");

    // فراخوانی callback با نام فایل
    cb(null, filename);

    // ذخیره نام اصلی فایل و مسیر نسبی در req.body برای استفاده در هنگام ثبت‌نام
    req.body.originalName = originalName;
    req.body.filePath = relativePath;
  },
});

// ایجاد نمونه `multer` با تنظیمات بالا
const upload = multer({
  storage,
  fileFilter: (_, file, cb) => {
    const supportedImage = /jpg|jpeg|png/i;
    const extension = path.extname(file.originalname).toLowerCase();

    if (supportedImage.test(extension)) {
      cb(null, true);
    } else {
      cb(new Error("Must be a png/jpg/jpeg format"));
    }
  },
});

export default upload;
