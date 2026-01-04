import * as stylex from '@stylexjs/stylex'
import { ReactNode } from 'react'

import { gapVariant } from './tokens'

const styles = stylex.create({
	base: {
		boxSizing: 'border-box',
		display: 'flex',
	},
	column: {
		flexDirection: 'column',
	},
	row: {
		flexDirection: 'row',
	},
})

export const Box = ({
	children,
	flex,
	gap,
}: {
	children?: ReactNode
	flex: 'column' | 'row'
	gap: keyof typeof gapVariant
}) => {
	return (
		<div
			{...stylex.props(
				styles.base,
				flex === 'row' ? styles.row : styles.column,
				gapVariant[gap],
			)}
		>
			{children}
		</div>
	)
}
