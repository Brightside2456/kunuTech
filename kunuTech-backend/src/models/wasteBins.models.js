const { z } = require("zod");

const wasteBinSchema = z.object({
    location: z.array(z.number, z.number),
    fill_level: z.number(),
    status: z.enum(["full", "empty", "filling", "needs_maintenance"]),
    last_collected: z.date()
})


export default wasteBinSchema;
