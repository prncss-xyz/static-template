export const basePath = (import.meta.env.VITE_BASE_PATH ?? '') + '/'
export const baseUrl = import.meta.env.VITE_BASE_URL ?? 'http://localhost:3000'

console.log('****!!!!!', baseUrl, basePath)
