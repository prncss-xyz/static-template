import type { ReactNode } from 'react'

import slugify from '@sindresorhus/slugify'

import './_components/index.css'

import { Col } from '@/components/Box'
import { contentsBySection } from '@/data/airtable/queries/contents'
import { allMeta } from '@/data/airtable/queries/meta'

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
			<Col align='center' as='main'>
				{children}
			</Col>
		</BaseLayout>
	)
}

const getData = async () => {
	const { title } = await allMeta
	const contents = await contentsBySection
	return {
		entries: Object.keys(contents).map((title) => ({
			title,
			to: `/section/${slugify(title)}`,
		})),
		title,
	}
}

export const getConfig = async () => {
	return {
		render: 'static',
	} as const
}
