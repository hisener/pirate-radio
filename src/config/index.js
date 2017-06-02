export const isProd = process.env.NODE_ENV === 'production'
export const protocol = 'http'
export const port = isProd ? 8080 : 3000

export const title = 'Pirate Radio'
