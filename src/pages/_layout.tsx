import type { ReactNode } from 'react'

import { BaseLayout } from './_components/BaseLayout'
import './_components/index.css'
import { Footer } from './_components/Footer'
import { Header } from './_components/Header'

export default async function Layout({ children }: { children: ReactNode }) {
	const data = await getData()
	return (
		<BaseLayout>
			<meta content={data.description} name='description' />
			<link href={data.icon} rel='icon' type='image/png' />
			<Header />
			<main>{children}</main>
			<Footer />
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
