'use client'
import { Button } from '@base-ui/react'
import { create, props } from '@stylexjs/stylex'
import { useState } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6'

import { fontSizes } from '@/components/tokens.stylex'
import { ImageProps } from '@/getResponsiveImage'

import { Col, Row } from '../../../components/Box'

const symbols = {
	circle: '○',
	disc: '●',
}

const styles = create({
	icon: {
		fontSize: fontSizes[3],
	},
	image: {
		height: '200px',
		objectFit: 'contain',
		width: '200px',
	},
})

export function Carousel({ images }: { images: ImageProps[] }) {
	const [index, setIndex] = useState(0)
	if (images.length === 0) return null
	const move = (delta: number) => (last: number) => {
		const next = last + delta
		if (next < 0) return next + images.length
		if (next >= images.length) return next - images.length
		return next
	}

	const many = images.length > 1
	return (
		<Col align='center' gap={3}>
			<Row align='center' gap={5}>
				{many && (
					<Button onClick={() => setIndex(move(-1))}>
						<FaChevronLeft style={{ color: 'white' }} />
					</Button>
				)}
				<img {...images[index]} {...props(styles.image)} />
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
