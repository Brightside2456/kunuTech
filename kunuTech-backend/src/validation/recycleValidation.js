const { z } = require('zod');

const logRecyclingSchema = z.object({
  user_id: z.string(),
  material_type: z.string(),
  weight: z.number().positive(),
});

module.exports = {
  logRecyclingSchema,
};