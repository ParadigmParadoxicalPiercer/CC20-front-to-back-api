//validate with yup
import { object, ref, string } from "yup";

export const registerSchema = object({
  email: string().email("โปรดตรวจสอบรูปแบบอีเมล").required("กรุณากรอกอีเมล"),
  name: string()
    .min(6, "กรุณากรอกชื่ออย่างน้อย 6 ตัวอักษร")
    .required("กรุณากรอกชื่อ"),
  password: string()
    .min(6, "กรุณากรอกรหัสอย่างน้อย 6 ตัว")
    .required("กรุณากรอกรหัสผ่าน"),
  confirmPassword: string()
    .min(6)
    .required()
    .oneOf([ref("password"), null], "รหัสผ่านไม่ตรงกัน"),
});

export const loginSchema = object({
  email: string().email("โปรดตรวจสอบรูปแบบอีเมล").required("กรุณากรอกอีเมล"),
  password: string()
    .min(6, "กรุณากรอกรหัสอย่างน้อย 6 ตัว")
    .required("กรุณากรอกรหัสผ่าน"),
});

export const validate = (schema) => async (req, res, next) => {
  //code body
  try {
    await schema.validate(req.body, { abortEarly: false });
    next();
  } catch (error) {
    const errMsg = error.errors.map((item) => item);
    const errTXT = errMsg.join(", ");
    console.log(errTXT);
    const mergeErr = new Error(errTXT);
    next(mergeErr);
  }
};
