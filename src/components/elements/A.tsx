import { create, props } from '@stylexjs/stylex'
import { Link } from 'waku'

import { fontSizes } from '../tokens'
import { ElemProps } from './types'

const styles = create({
	base: {
		fontWeight: 'bold',
	},
})

type BoxProps = ElemProps<'a'>

export function A({ children, href, style, ...rest }: BoxProps) {
	if (href && (href.startsWith('/') || href.startsWith('.')))
		return (
			<Link
				children={children}
				to={href as any}
				{...rest}
				{...props(styles.base, fontSizes[5], style)}
			/>
		)
	return (
		<a
			children={children}
			href={href}
			target='_blank'
			{...rest}
			{...props(styles.base, fontSizes[5], style)}
		/>
	)
}
