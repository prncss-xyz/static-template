import { Link } from 'waku'

import { Counter } from '@/components/counter'

export default async function HomePage() {
	const data = await getData()

	return (
		<div>
			<title>{data.title}</title>
			<div>{data.headline}</div>
			<p>{data.body}</p>
			<Counter />
			<Link to='/about'>About page</Link>
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
