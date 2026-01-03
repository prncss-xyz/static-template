import { Link } from 'waku'

import { Box } from '@/components/box'
import { Counter } from '@/components/counter'

export default async function HomePage() {
	const data = await getData()

	return (
		<div>
			<title>{data.title}</title>
			<Box textAlign='center'>{data.headline}</Box>
			<p>{data.body}</p>
			<Counter />
			<Link className='mt-4 inline-block underline' to='/about'>
				About page
			</Link>
		</div>
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
