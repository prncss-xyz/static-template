import type { ReactNode } from 'react'

import './_components/index.css'
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
			<meta content={data.description} name='description' />
			<link href={data.icon} rel='icon' type='image/png' />
			<Navigation />
			<main>{children}</main>
		</BaseLayout>
	)
}

const getData = async () => {
	const data = {
		description: 'An internet website!',
		icon: '/images/favicon.png',
	}

	return data
}

export const getConfig = async () => {
	return {
		render: 'static',
	} as const
}
