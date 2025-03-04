const { z } = require("zod");

const wasteBinScema = z.object({
    location: z.array(z.number, z.number),
    fill_level: z.number(),
    status: z.enum(["full", "empty", "filling", "needs_maintenance"]),
    last_collected: z.date()
})

export default wasteBinScema;
