import { create, props } from '@stylexjs/stylex'

import { ElemProps } from './types'

const styles = create({
	base: {
		listStyleType: {
			':where(ul,ol) &': 'lower-alpha',
			':where(ul,ol) :where(ul,ol) &': 'lower-roman',
			default: 'decimal',
		},
		paddingLeft: '2.4rem',
	},
})

export function Ol({ style, ...rest }: ElemProps<'ol'>) {
	return <ol {...rest} {...props(styles.base, style)} />
}
