export const validate = (email  , password) =>{
   const emailValidate = /[A-Za-z0-9\._%+\-]+@[A-Za-z0-9\.\-]+\.[A-Za-z]{2,}/.test(email);
   if(!emailValidate) return "*Invalid Email";

   const passwordValidate = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

   if(!passwordValidate) return "*Invalid Password"

   return null;

}