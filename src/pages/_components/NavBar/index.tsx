'use client'

import { create, props } from '@stylexjs/stylex'

import { Data } from './data'
import { NavBar } from './NavBar'
import { NavOverlay } from './NavOverlay'

const SMALL = '@media (max-width: 650px)'

const styles = create({
	base: {
		fontWeight: 600,
	},
	md: {
		display: {
			default: 'none',
			[SMALL]: 'block',
		},
	},
	sm: {
		display: {
			default: 'block',
			[SMALL]: 'none',
		},
	},
})

export function Navigation({ data }: { data: Data }) {
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
