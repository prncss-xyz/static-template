'use client'

import { create, props } from '@stylexjs/stylex'

import { basePath, baseUrl } from '@/basePath'

import { Data } from './data'
import { NavBar } from './NavBar'
import { NavOverlay } from './NavOverlay'

const MEDIUM = '@media (min-width: 650px)'

const styles = create({
	base: {
		backgroundColor: 'black',
		fontWeight: 600,
		position: 'sticky',
		top: 0,
	},
	md: {
		display: {
			default: 'block',
			[MEDIUM]: 'none',
		},
	},
	sm: {
		display: {
			default: 'none',
			[MEDIUM]: 'block',
		},
	},
})

export function Navigation({ data }: { data: Data }) {
	// eslint-disable-next-line no-console
	console.log({
		basePath,
		baseUrl,
	})
	return (
		<>
			<div {...props(styles.md, styles.base)}>
				<NavOverlay data={data} />
			</div>
			<div {...props(styles.sm, styles.base)}>
				<NavBar data={data} />
			</div>
		</>
	)
}
