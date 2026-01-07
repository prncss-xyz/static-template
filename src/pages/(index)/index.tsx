import { Link } from 'waku'

import { Col } from '@/components/Box'
import { H1 } from '@/components/elements/Heading'
import { RespImage } from '@/components/elements/Image'
import { MD } from '@/components/MD'

import { Counter } from './_components/Counter'

const md = `
# Toto
## Toto

Hello *hello* **hi**!


* Item 1
  * Item 2
    * Item 2
      * Item 2

1. Item 1
  1. Item 2
    1. Item 2
      1. Item 2

`

export default async function HomePage() {
	const data = await getData()
	return (
		<Col gap={5}>
			<title>{data.title}</title>
			<H1>{data.headline}</H1>
			<p>{data.body}</p>
			<Counter />
			<RespImage alt='toto' src='https://picsum.dev/1200/800' />
			<MD>{md}</MD>
			<Link to='/about'>About page</Link>
		</Col>
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
