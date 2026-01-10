import { PageTemplate } from '@/components/pageTemplate'

export default async function HomePage() {
	return <PageTemplate slug='' />
}

export const getConfig = async () => {
	return {
		render: 'static',
	} as const
}
