import type { ReactNode } from 'react'

import { DevStyleXInject } from './_components/DevStylexInject'
import { Footer } from './_components/Footer'
import './_components/index.css'
import { Header } from './_components/Header'

export default async function Layout({ children }: { children: ReactNode }) {
	const data = await getData()
	return (
		<div>
			<meta content={data.description} name='description' />
			<link href={data.icon} rel='icon' type='image/png' />
			<link
				as='font'
				crossOrigin='anonymous'
				href='/fonts/Nunito-Regular.woff2'
				rel='preload'
				type='font/woff2'
			/>
			<link
				as='font'
				crossOrigin='anonymous'
				href='/fonts/Nunito-Italic.woff2'
				rel='preload'
				type='font/woff2'
			/>
			<DevStyleXInject cssHref='/stylex.css' />
			<Header />
			<main>{children}</main>
			<Footer />
		</div>
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
