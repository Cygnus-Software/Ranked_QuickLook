export default {
  type: "object",
  properties: {
    players: { type: "string" }
  },
  required: ['players']
} as const;