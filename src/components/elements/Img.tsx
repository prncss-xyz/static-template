import { create, props } from '@stylexjs/stylex'

import { getResponsiveImage } from '@/getResponsiveImage'

import { ElemProps } from './types'

const styles = create({
	base: {
		padding: '0.5rem',
	},
})

export async function Img({ alt, src, style, ...rest }: ElemProps<'img'>) {
	if (src) {
		const imgProps = await getResponsiveImage(src, alt)
		return <img {...rest} {...imgProps} {...props(styles.base, style)} />
	}
	return <img {...rest} {...props(styles.base, style)} />
}
