'use client'

import { create, props } from '@stylexjs/stylex'

import { NavBar } from './NavBar'
import { NavOverlay } from './NavOverlay'

const SMALL = '@media (max-width: 650px)'

const styles = create({
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

export function Navigation() {
	return (
		<>
			<div {...props(styles.md)}>
				<NavOverlay />
			</div>
			<div {...props(styles.sm)}>
				<NavBar />
			</div>
		</>
	)
}
