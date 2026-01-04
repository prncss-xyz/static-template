import * as stylex from '@stylexjs/stylex'
import { ReactNode } from 'react'

import { flexVariant, gapVariant } from './tokens'

type BoxProps = {
	children?: ReactNode
	flex: keyof typeof flexVariant
	gap?: keyof typeof gapVariant
}

export function Box({ children, flex, gap }: BoxProps) {
	return (
		<div {...stylex.props(flexVariant[flex], gapVariant[gap ?? 'none'])}>
			{children}
		</div>
	)
}

export function Row(props: Omit<BoxProps, 'flex'>) {
	return (
		<Box flex='row' {...props}>
			{props.children}
		</Box>
	)
}

export function Col(props: Omit<BoxProps, 'flex'>) {
	return (
		<Box flex='column' {...props}>
			{props.children}
		</Box>
	)
}
