import { create, props } from '@stylexjs/stylex'

import { fontSizes } from '../tokens'
import { ElemProps } from './types'

const styles = create({
	base: {
		position: 'relative',
		top: '0.5rem',
	},
})

export function Sub({ style, ...rest }: ElemProps<'sub'>) {
	return <sub {...rest} {...props(styles.base, fontSizes[5], style)} />
}
