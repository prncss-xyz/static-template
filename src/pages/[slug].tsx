import { PageTemplate } from '@/components/pageTemplate'
import { getPageSlugs } from '@/data/queries/pages'

export default async function Page({ slug }: { slug: string }) {
	return <PageTemplate slug={slug} />
}

export async function getConfig() {
	return {
		render: 'static',
		staticPaths: await getPageSlugs(),
	} as const
}
