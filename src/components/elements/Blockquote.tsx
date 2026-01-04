import { create, props } from '@stylexjs/stylex'

import { fontSizes } from '../tokens'
import { ElemProps } from './types'

const styles = create({
	base: {
		backgroundColor: 'lightgray',
		borderLeftColor: 'black',
		borderLeftWidth: '0.25rem',
		paddingLeft: '0.75rem',
	},
})

export function Blockquote({ style, ...rest }: ElemProps<'blockquote'>) {
	return <blockquote {...rest} {...props(styles.base, fontSizes[5], style)} />
}
