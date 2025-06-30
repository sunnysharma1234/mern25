const {z} = require('zod');
// const { User } = require('../models/user-model');
const loginSchema = z.object({
    email: z.string({required_error:"Email is required"}).trim().email({ message: "Invalid email address" }).min(3, { message: "Email must be at least 3 characters long" }).max(100, { message: "Email must be at most 100 characters long" }),
    password: z.string({required_error:"Password is required"}).min(6, { message: "Password must be at least 6 characters long" }).max(100, { message: "Password must be at most 100 characters long" }),
});
const signupSchema = loginSchema.extend({
    username: z.string({required_error:"Name is required"}).trim().min(3, { message: "Username must be at least 3 characters long" }),
    // email: z.string({required_error:"Email is required"}).trim().email({ message: "Invalid email address" }).min(3, { message: "Email must be at least 3 characters long" }).max(100, { message: "Email must be at most 100 characters long" }),
    phone: z.string({required_error:"Phone number is requires"}).trim().min(10, { message: "Phone number must be at least 10 digits long" }),
    // password: z.string({required_error:"Password is required"}).min(6, { message: "Password must be at least 6 characters long" }).max(100, { message: "Password must be at most 100 characters long" }),
});



 
module.exports = {
    signupSchema,
    loginSchema,
    // forgotPasswordSchema,
    // resetPasswordSchema,
    // updateProfileSchema,
    // changePasswordSchema,
    // verifyEmailSchema,
    // verifyPhoneSchema,
    // deleteAccountSchema,
};