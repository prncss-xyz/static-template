import { create, props } from '@stylexjs/stylex'
import { ReactNode } from 'react'

import { colorStyles } from '@/components/sharedStyles'

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
			<DevStyleXInject cssHref='/stylex.css' />
			<div {...props(colorStyles.direct, styles.root)}>{children}</div>
		</>
	)
}
