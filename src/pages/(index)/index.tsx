import { Col } from '@/components/Box'
import { H1 } from '@/components/elements/Heading'

export default async function HomePage() {
	return (
		<Col gap={5}>
			<title>Home page</title>
			<H1>Home page</H1>
		</Col>
	)
}

export const getConfig = async () => {
	return {
		render: 'static',
	} as const
}
