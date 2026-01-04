import { Link } from 'waku'

import { Box } from '@/components/Box'
import { RespImage } from '@/components/Image'

import { Counter } from './_components/Counter'

export default async function HomePage() {
	const data = await getData()

	return (
		<Box flex='column' gap={3}>
			<title>{data.title}</title>
			<div>{data.headline}</div>
			<p>{data.body}</p>
			<Counter />
			<RespImage alt='toto' url='https://picsum.dev/1200/800' />
			<Link to='/about'>About page</Link>
		</Box>
	)
}

const getData = async () => {
	const data = {
		body: 'Hello world!',
		headline: 'Waku',
		title: 'Waku',
	}

	return data
}

export const getConfig = async () => {
	return {
		render: 'static',
	} as const
}
