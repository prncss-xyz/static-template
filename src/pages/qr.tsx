import { baseUrl } from '@/basePath'
import { Col } from '@/components/Box'
import { QR } from '@/components/QR'
import { site } from '@/data/queries/site'

export default async function HomePage() {
	return (
		<Col align='center' gap={7} justify='end' size='fullSize'>
			<div />
			<QR href={baseUrl} name={site.title} />
		</Col>
	)
}

export const getConfig = async () => {
	return {
		render: 'static',
	} as const
}
