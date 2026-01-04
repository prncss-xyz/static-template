import { create, props } from '@stylexjs/stylex'

import { gap } from '../tokens'
import { ElemProps } from './types'

const flex = create({
	col: {
		display: 'flex',
		flexDirection: 'column',
	},
	row: {
		display: 'flex',
		flexDirection: 'row',
	},
})

type BoxProps = ElemProps<'div'> & {
	g: keyof typeof gap
}

export function Row({ g, style, ...rest }: BoxProps) {
	return <div {...rest} {...props(flex.row, gap[g], style)} />
}

export function Col({ g, style, ...rest }: BoxProps) {
	return <div {...rest} {...props(flex.col, gap[g], style)} />
}
