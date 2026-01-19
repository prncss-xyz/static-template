/*
export const basePath = import.meta.env.VITE_BASE_PATH
	? '/' + import.meta.env.VITE_BASE_PATH + '/'
	: '/'
*/

console.log(import.meta.env.VITE_BASE_PATH)

function getBasePath() {
	const repo = import.meta.env.VITE_GITHUB_REPOSITORY
	if (!repo) return '/'
	const [, name] = repo.split('/')
	if (!name) return undefined
	return '/' + name + '/'
}

export const basePath = getBasePath()
export const baseUrl = import.meta.env.VITE_BASE_URL ?? 'http://localhost:3000'
