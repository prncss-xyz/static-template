function getBasePath() {
	const repo = import.meta.env.VITE_GITHUB_REPOSITORY
	if (!repo) return '/'
	const [, name] = repo.split('/')
	if (!name) return undefined
	return '/' + name + '/'
}

export const basePath = getBasePath()
