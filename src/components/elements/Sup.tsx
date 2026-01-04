import { create, props } from '@stylexjs/stylex'

import { fontSizes } from '../tokens'
import { ElemProps } from './types'

const styles = create({
	base: {
		bottom: '0.5rem',
		position: 'relative',
	},
})

export function Sup({ style, ...rest }: ElemProps<'sup'>) {
	return <sup {...rest} {...props(styles.base, fontSizes[5], style)} />
}
