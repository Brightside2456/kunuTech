const { z } = require("zod");

const recyclingActivitySchema = z.object({
    user_id: z.string(),
    material_type: z.enum(["plastic", "glass", "metal", "paper", "cardboard", "other"]),
    weight: z.number(),
    points_earned: z.number(),
    recycled_at: z.date(),
});

export default recyclingActivitySchema;