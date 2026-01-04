import type { ReactNode } from 'react'

import './index.css'
import { DevStyleXInject } from './DevStylexInject'

export function ArchLayout({
	children,
	description,
	icon,
}: {
	children: ReactNode
	description: string
	icon: string
}) {
	return (
		<div>
			<meta content={description} name='description' />
			<link href={icon} rel='icon' type='image/png' />
			<link href='https://fonts.googleapis.com' rel='preconnect' />
			<link crossOrigin='' href='https://fonts.gstatic.com' rel='preconnect' />
			<link
				href='https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,400;0,700;1,400;1,700&display=swap'
				precedence='font'
				rel='stylesheet'
			/>
			<DevStyleXInject cssHref='/stylex.css' />
			{children}
		</div>
	)
}
