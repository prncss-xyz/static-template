import type { ReactNode } from 'react'

import './_components/index.css'

import { getAllValues } from '@/data/airtable/values'

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
			<main>{children}</main>
		</BaseLayout>
	)
}

const getData = async () => {
	const values = await getAllValues()

	const data = {
		entries: [
			{ title: 'Home', to: '/' },
			{ title: 'About', to: '/about' },
		],
		title: 'Waku',
		values,
	}

	return data
}

export const getConfig = async () => {
	return {
		render: 'static',
	} as const
}
