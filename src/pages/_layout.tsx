import type { ReactNode } from 'react'

import './_components/index.css'

import { Col } from '@/components/Box'
import { getPages } from '@/data/queries/pages'
import { site } from '@/data/queries/site'

import { BaseLayout } from './_components/BaseLayout'
import { Navigation } from './_components/NavBar'

export default async function Layout({
	children,
}: {
	children: ReactNode
	path: string
}) {
	const data = await getData()
	return (
		<BaseLayout>
			<Navigation data={data} />
			<title>{data.title}</title>
			<meta content={site.description} name='description' />
			<Col align='center' as='main' p={4}>
				{children}
			</Col>
		</BaseLayout>
	)
}

const { title } = site

const getData = async () => {
	const contents = await getPages()
	return {
		entries: contents.map(({ slug, title }) => ({
			title,
			to: '/' + slug,
		})),
		title,
	}
}

export const getConfig = async () => {
	return {
		render: 'static',
	} as const
}
