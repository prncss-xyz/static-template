import { ReactNode } from 'react'

import { DevStyleXInject } from './DevStylexInject'

export function BaseLayout({ children }: { children: ReactNode }) {
	return (
		<>
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
			{children}
		</>
	)
}
