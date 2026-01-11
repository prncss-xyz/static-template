import { create } from '@stylexjs/stylex'

import { Col } from '@/components/Box'
import { H2 } from '@/components/elements/Heading'
import { MD } from '@/components/MD'
import { Carousel } from '@/components/pageTemplate/Carousel'
import { getArticles } from '@/data/queries/articles'

import { spaces } from '../tokens.stylex'

function Article({
	contents,
	images,
	title,
}: {
	contents: string
	images: string[]
	title: string
}) {
	return (
		<div>
			<H2>{title}</H2>
			<Carousel images={images} />
			<MD>{contents}</MD>
		</div>
	)
}

const MEDIUM = '@media (min-width: 650px)'

const styles = create({
	readable: {
		gap: {
			default: spaces[7],
			[MEDIUM]: spaces[8],
		},
		maxWidth: '60ch',
	},
})

export async function Articles() {
	const data = await getArticles()
	return (
		<Col gap={8} style={styles.readable}>
			{data.map((content) => (
				<Article {...content} key={content.title} />
			))}
		</Col>
	)
}
