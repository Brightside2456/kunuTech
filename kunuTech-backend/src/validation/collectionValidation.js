const { z } = require('zod');

const assignCollectorSchema = z.object({
  collector_id: z.string(),
  bin_id: z.string(),
  scheduled_time: z.string().refine(val => !isNaN(Date.parse(val)), {
    message: "Invalid date format",
  }),
});

const completeCollectionSchema = z.object({
  collection_id: z.string(),
  collector_id: z.string(),
});

module.exports = {
  assignCollectorSchema,
  completeCollectionSchema,
};