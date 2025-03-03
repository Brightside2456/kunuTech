const { z } = require("zod");

const userSchema =  z.object({
    full_name: z.string(),
    email: z.email(),
    phone_number: z.string(),
    password: z.string(),
    user_type: z.enum(["admin", "user", "collector"]),
    points: z.number(),
    created_at: z.date(),
})

const leaderBoardSchema = z.object({
    user_id: z.string(),
    points
    last_updated: z.date()
})

export default {userSchema, leaderBoardSchema};