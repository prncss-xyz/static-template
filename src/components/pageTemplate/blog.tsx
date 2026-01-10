import { create } from '@stylexjs/stylex'

import { Col } from '@/components/Box'
import { H2 } from '@/components/elements/Heading'
import { MD } from '@/components/MD'
import { Carousel } from '@/components/pageTemplate/Carousel'
import { getArticles } from '@/data/queries/articles'
import { ImageProps } from '@/getResponsiveImage'

function Article({
	contents,
	images,
	title,
}: {
	contents: string
	images: ImageProps[]
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

const styles = create({
	readable: {
		maxWidth: '60ch',
	},
})

export async function Articles() {
	const data = await getArticles()
	return (
		<Col gap={3} style={styles.readable}>
			{data.map((content) => (
				<Article {...content} key={content.title} />
			))}
		</Col>
	)
}
