const { z } = require('zod');

const registerSchema = z.object({
  full_name: z.string(),
  email: z.string().email(),
  phone_number: z.string(),
  password: z.string(),
  user_type: z.enum(["user", "collector", "admin"]),
});

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

module.exports = {
  registerSchema,
  loginSchema,
};