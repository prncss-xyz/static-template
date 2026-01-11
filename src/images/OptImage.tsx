'use client'
import { create, props, StyleXStyles } from '@stylexjs/stylex'
import { ComponentProps, useEffect, useRef, useState } from 'react'

import { ResponsiveImage } from './getResponsiveImage'

const styles = create({
	container: {
		display: 'inline-grid',
		placeItems: 'center',
	},
	content: {
		gridArea: '1 / 1',
		objectFit: 'contain',
	},
	invisible: {
		opacity: 0,
	},
	overlay: {
		height: '100%',
		width: '100%',
	},
})

export function OptImage({
	image: { alt, placeholder, src, srcSet },
	style,
	...rest
}: Omit<ComponentProps<'div'>, 'classname' | 'style'> & {
	image: ResponsiveImage
	style?: StyleXStyles
}) {
	const [loaded, setLoaded] = useState(false)
	const imgRef = useRef<HTMLImageElement>(null)
	useEffect(() => {
		if (imgRef.current?.complete) setLoaded(true)
	}, [])
	return (
		<div {...rest} {...props(styles.container)}>
			<img
				alt={alt}
				onLoad={() => setLoaded(true)}
				ref={imgRef}
				src={src}
				srcSet={srcSet}
				{...props(style, styles.content, !loaded && styles.invisible)}
			/>
			<img
				alt=''
				aria-hidden='true'
				src={placeholder}
				{...props(
					style,
					styles.content,
					styles.overlay,
					loaded && styles.invisible,
				)}
			/>
		</div>
	)
}
