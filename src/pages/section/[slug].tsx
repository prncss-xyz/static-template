import { create } from '@stylexjs/stylex'

import { Col } from '@/components/Box'
import { H1, H2 } from '@/components/elements/Heading'
import { MD } from '@/components/MD'
import { getSectionBySlug, listSlugs } from '@/data/airtable/queries/contents'
import { ImageProps } from '@/getResponsiveImage'
import { Carousel } from '@/pages/section/_components/Carousel'

function Section({
	contents,
	images,
	skipTitle,
	title,
}: {
	contents: string
	images: ImageProps[]
	skipTitle: boolean
	title: string
}) {
	return (
		<div>
			{!skipTitle && <H2>{title}</H2>}
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

export default async function Page({ slug }: { slug: string }) {
	const { data, name } = await getSectionBySlug(slug)
	return (
		<Col gap={3} style={styles.readable}>
			<H1>{name}</H1>
			{data.map((content, index) => (
				<Section
					skipTitle={index === 0 && content.title === name}
					{...content}
					key={content.title}
				/>
			))}
		</Col>
	)
}

export async function getConfig() {
	return {
		render: 'static',
		staticPaths: await listSlugs(),
	} as const
}
