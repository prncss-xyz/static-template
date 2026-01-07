import { create, props } from '@stylexjs/stylex'
import { ReactNode } from 'react'

import { colorStyles } from '@/components/colorStyles'

import { DevStyleXInject } from './DevStylexInject'

const styles = create({
	root: {
		isolation: 'isolate',
		minHeight: '100vh',
	},
})

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
			<div {...props(colorStyles.direct, styles.root)}>{children}</div>
		</>
	)
}
