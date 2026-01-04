import { create, props } from '@stylexjs/stylex'

import { ElemProps } from './types'

const styles = create({
	base: {
		listStyleType: {
			':where(ul,ol) &': 'circle',
			':where(ul,ol) :where(ul,ol) &': 'square',
			default: 'disc',
		},
		paddingLeft: '2.4rem',
	},
})

export function Ul({ style, ...rest }: ElemProps<'ul'>) {
	return <ul {...rest} {...props(styles.base, style)} />
}
