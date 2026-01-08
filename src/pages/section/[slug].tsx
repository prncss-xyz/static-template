import { Col } from '@/components/Box'
import { H1 } from '@/components/elements/Heading'
import { RespImage } from '@/components/elements/Image'
import { MD } from '@/components/MD'
import { contentsBySlug } from '@/data/airtable/queries/contents'

export default async function ({ slug }: { slug: string }) {
	const contents = await contentsBySlug
	const data = contents[slug]
	if (!data) throw new Error('Not found')
	const data0 = data[0]
	if (!data0) throw new Error('Empty')
	const { Title } = data0
	return (
		<Col gap={3}>
			<H1>{Title}</H1>
			{data.map((content) => (
				<div key={content.Title}>
					{content.Images.map((url) => (
						<RespImage alt={content.Title} src={url} />
					))}
					<MD>{content.Contents}</MD>
				</div>
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
