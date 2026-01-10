import { create } from '@stylexjs/stylex'

import { Col } from '@/components/Box'
import { H1, H2 } from '@/components/elements/Heading'
import { MD } from '@/components/MD'
import { contentsBySlug } from '@/data/airtable/queries/contents'
import { ImageProps } from '@/getResponsiveImage'
import { Carousel } from '@/pages/section/_components/Carousel'

function Section({
	contents,
	images,
	keepTitle,
	title,
}: {
	contents: string
	images: ImageProps[]
	keepTitle: boolean
	title: string
}) {
	return (
		<div>
			{keepTitle && <H2>{title}</H2>}
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

export default async function ({ slug }: { slug: string }) {
	const contents = await contentsBySlug
	const data = contents[slug]
	if (!data) throw new Error('Not found')
	const data0 = data[0]
	if (!data0) throw new Error('Empty')
	const { section } = data0
	return (
		<Col gap={3} style={styles.readable}>
			<H1>{section}</H1>
			{data.map((content, index) => (
				<Section
					keepTitle={index === 0 && content.title !== section}
					{...content}
					key={content.title}
				/>
			))}
		</Col>
	)
}

export async function getConfig() {
	const contents = await contentsBySlug
	return {
		render: 'static',
		staticPaths: Object.keys(contents),
	} as const
}
