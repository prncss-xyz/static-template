import { create } from '@stylexjs/stylex'

import { Col } from '@/components/Box'
import { H1 } from '@/components/elements/Heading'
import { MD } from '@/components/MD'
import { getPage } from '@/data/queries/pages'
import { site } from '@/data/queries/site'

import { Articles } from './blog'
import { Carousel } from './Carousel'

const MEDIUM = '@media (min-width: 650px)'

const styles = create({
	readable: {
		maxWidth: '60ch',
		paddingTop: {
			default: '3em',
			[MEDIUM]: '10em',
		},
	},
})

const { blog } = site

export async function PageTemplate({ slug }: { slug: string }) {
	const { contents, images, title } = await getPage(slug)
	return (
		<Col style={styles.readable}>
			<H1>{title}</H1>
			<Carousel alt={title} images={images} />
			<MD>{contents}</MD>
			{slug === blog && <Articles />}
		</Col>
	)
}
