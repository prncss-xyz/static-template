import { create, props } from '@stylexjs/stylex'
import { ElementType } from 'react'

import { fontSizes } from '../tokens'
import { ElemProps } from './types'

const styles = create({
	base: {
		fontWeight: 'bold',
	},
})

const margins = create({
	1: {
		marginTop: '0.67rem',
	},
	2: {
		marginTop: '0.83rem',
	},
	3: {
		marginTop: '1rem',
	},
	4: {
		marginTop: '1.33rem',
	},
	5: {
		marginTop: '1.67rem',
	},
	6: {
		marginTop: '0.5rem',
	},
})

function createHeading(
	baseElement: ElementType,
	baseSize: keyof typeof margins,
) {
	return function Heading<E extends ElementType>({
		as,
		size,
		style,
		...rest
	}: ElemProps<'h1'> & {
		as?: E
		size?: keyof typeof margins
	}) {
		const E = as ?? baseElement
		return (
			<E
				{...rest}
				{...props(
					styles.base,
					fontSizes[size ?? baseSize],
					margins[size ?? baseSize],
					style,
				)}
			/>
		)
	}
}

export const H1 = createHeading('h1', 1)
export const H2 = createHeading('h2', 2)
export const H3 = createHeading('h3', 3)
export const H4 = createHeading('h4', 4)
export const H5 = createHeading('h5', 5)
export const H6 = createHeading('h6', 6)
