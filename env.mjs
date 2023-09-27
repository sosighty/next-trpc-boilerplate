import { createEnv } from "@t3-oss/env-nextjs"
import { z } from "zod"

export const env = createEnv({
  server: {
    ANALYZE: z
      .enum(["true", "false"])
      .optional()
      .transform((value) => value === "true"),
    NODE_ENV: z.enum(["development", "production"]),
  },
  client: {},
  runtimeEnv: {
    ANALYZE: process.env.ANALYZE,
    NODE_ENV: process.env.NODE_ENV,
  },
})
