const { z } = require('zod');

const addBinSchema = z.object({
  location: z.object({
    latitude: z.number(),
    longitude: z.number(),
  }),
  fill_level: z.number().min(0).max(100),
  status: z.enum(["empty", "filling", "full", "needs_maintenance"]),
  last_collected: z.string().refine(val => !isNaN(Date.parse(val)), {
    message: "Invalid date format",
  }),
});

module.exports = {
  addBinSchema,
};