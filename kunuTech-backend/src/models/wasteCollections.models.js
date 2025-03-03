const { z } = require("zod");

const wasteCollectionSchema = z.object({
    bin_id: z.string(),
    collector_id: z.string(),
    scheduled_time: z.date(),
    completion_status: z.enum(["completed", "missed", "pending"]),
});

export default wasteCollectionSchema;