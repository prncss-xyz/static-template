function getBasePath0() {
	const repo = import.meta.env.VITE_GITHUB_REPOSITORY
	if (!repo) return '/'
	const [, name] = repo.split('/')
	if (!name) return undefined
	return '/' + name + '/'
}

export const basePath = (import.meta.env.VITE_BASE_PATH ?? '') + '/'
export const baseUrl = import.meta.env.VITE_BASE_URL ?? 'http://localhost:3000'

console.log('****!!!!!', basePath, getBasePath0())
