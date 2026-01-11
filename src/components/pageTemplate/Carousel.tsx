'use client'
import { Button } from '@base-ui/react'
import { create } from '@stylexjs/stylex'
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
	icon: {
		fontSize: fontSizes[3],
	},
	image: {
		height: '50vw',
		objectFit: 'contain',
		width: '50vh',
	},
})

export function Carousel({ images }: { images: ResponsiveImage[] }) {
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
					<Button onClick={() => setIndex(move(-1))}>
						<FaChevronLeft style={{ color: 'white' }} />
					</Button>
				)}
				<div>
					<OptImage image={image} style={styles.image} />
				</div>
				{many && (
					<Button onClick={() => setIndex(move(1))}>
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
