import { Link } from 'waku'

export default async function AboutPage() {
	const data = await getData()

	return (
		<div>
			<title>{data.title}</title>
			<h1>{data.headline}</h1>
			<p>{data.body}</p>
			<Link to='/'>
				Return home
			</Link>
		</div>
	)
}

const getData = async () => {
	const data = {
		body: 'The minimal React framework',
		headline: 'About Waku',
		title: 'About',
	}

	return data
}

export const getConfig = async () => {
	return {
		render: 'static',
	} as const
}
