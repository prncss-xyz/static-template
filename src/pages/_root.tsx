import { ReactNode } from 'react'

import { site } from '@/data/queries/site'

export default async function RootElement({
	children,
}: {
	children: ReactNode
}) {
	return (
		<html lang={site.lang}>
			<head />
			<body>{children}</body>
		</html>
	)
}

export const getConfig = async () => {
	return {
		render: 'static',
	} as const
}
