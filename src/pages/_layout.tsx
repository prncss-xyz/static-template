import type { ReactNode } from 'react'

import { Box } from '@/components/box'

import { Footer } from '../components/footer'
import { Header } from '../components/header'

type RootLayoutProps = { children: ReactNode }

export default async function RootLayout({ children }: RootLayoutProps) {
	const data = await getData()

	return (
		<Box>
			<meta content={data.description} name='description' />
			<link href={data.icon} rel='icon' type='image/png' />
			<link href='https://fonts.googleapis.com' rel='preconnect' />
			<link crossOrigin='' href='https://fonts.gstatic.com' rel='preconnect' />
			<link
				href='https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,400;0,700;1,400;1,700&display=swap'
				precedence='font'
				rel='stylesheet'
			/>
			<Header />
			<main>
				{children}
			</main>
			<Footer />
		</Box>
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
