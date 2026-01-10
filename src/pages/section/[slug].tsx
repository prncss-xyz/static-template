import { create } from '@stylexjs/stylex'

import { Col } from '@/components/Box'
import { H1, H2 } from '@/components/elements/Heading'
import { RespImage } from '@/components/elements/Image'
import { MD } from '@/components/MD'
import { contentsBySlug } from '@/data/airtable/queries/contents'
import { Carousel } from '@/pages/section/_components/Carousel'

const styles = create({
	image: {
		height: '200px',
		objectFit: 'contain',
		width: '200px',
	},
})

function Section({
	contents,
	images,
	section,
	title,
}: {
	contents: string
	images: string[]
	section: string
	title: string
}) {
	const imageNodes = images.map((image) => (
		<RespImage alt={section} key={image} src={image} style={styles.image} />
	))

	return (
		<div>
			<H2>{title}</H2>
			<Carousel images={imageNodes} />
			<MD>{contents}</MD>
		</div>
	)
}

export default async function ({ slug }: { slug: string }) {
	const contents = await contentsBySlug
	const data = contents[slug]
	if (!data) throw new Error('Not found')
	const data0 = data[0]
	if (!data0) throw new Error('Empty')
	const { section } = data0
	return (
		<Col gap={3}>
			<H1>{section}</H1>
			{data.map((content) => (
				<Section {...content} key={content.title} />
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
