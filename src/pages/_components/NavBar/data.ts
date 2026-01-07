export type Entry = {
	title: string
	to: string
}

export const defaultTitle = 'Hello'

export const entries: Entry[] = [
	{ title: 'Home', to: '/' },
	{ title: 'About', to: '/about' },
]
