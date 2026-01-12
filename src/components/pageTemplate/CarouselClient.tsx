'use client'
import { Button } from '@base-ui/react'
import { create, props } from '@stylexjs/stylex'
import { useState } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6'

import { fontSizes } from '@/components/tokens.stylex'
import { ResponsiveImage } from '@/images/getResponsiveImage'
import { OptImage } from '@/images/OptImage'

import { Col, Row } from '../Box'

const symbols = {
	circle: '○',
	disc: '●',
}

const styles = create({
	atopContainer: {
		display: 'inline-grid',
		placeItems: 'center',
	},
	atopContent: {
		gridArea: '1 / 1',
	},
	button: {
		flexShrink: 0,
	},
	icon: {
		fontSize: fontSizes[3],
	},
	image: {
		maxHeight: '70vh',
		maxWidth: 'min(70vw, 40ch)',
		objectFit: 'contain',
	},
	invisible: {
		visibility: 'hidden',
	},
})

export function CarouselClient({ images }: { images: ResponsiveImage[] }) {
	const [index, setIndex] = useState(0)
	if (images.length === 0) return null
	const move = (delta: number) => (last: number) => {
		const next = last + delta
		if (next < 0) return next + images.length
		if (next >= images.length) return next - images.length
		return next
	}
	const image = images[index]
	if (!image) throw new Error('No image')

	const many = images.length > 1
	return (
		<Col align='center' gap={5}>
			<Row align='center' gap={4}>
				{many && (
					<Button onClick={() => setIndex(move(-1))} {...props(styles.button)}>
						<FaChevronLeft style={{ color: 'white' }} />
					</Button>
				)}
				<div {...props(styles.atopContainer)}>
					{images.map((image, i) => (
						<div
							key={image.src}
							{...props(styles.atopContent, i !== index && styles.invisible)}
						>
							<OptImage image={image} style={styles.image} />
						</div>
					))}
				</div>
				{many && (
					<Button onClick={() => setIndex(move(1))} {...props(styles.button)}>
						<FaChevronRight />
					</Button>
				)}
			</Row>
			{many && (
				<Row style={styles.icon}>
					{images.map((_, i) => (
						<Button key={i} onClick={() => setIndex(i)}>
							{i === index ? symbols.disc : symbols.circle}
						</Button>
					))}
				</Row>
			)}
		</Col>
	)
}
