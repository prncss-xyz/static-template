import { create, StyleXStyles } from '@stylexjs/stylex'
import { Link, useRouter } from 'waku'

import { Box, Col, Row } from '@/components/Box'
import { colorStyles } from '@/components/sharedStyles'

import { Data, Entry } from './data'

function Nav({
	active,
	entry,
	style,
}: {
	active: boolean
	entry: Entry
	style?: StyleXStyles
}) {
	return (
		<Box
			as={Link}
			key={entry.to}
			p={4}
			style={[active && colorStyles.inverse, style]}
			to={entry.to as any}
		>
			{entry.title}
		</Box>
	)
}

const styles = create({
	bar: {
		padding: '1em',
	},
})

export function NavBar({ data, style }: { data: Data; style?: StyleXStyles }) {
	const { path } = useRouter()
	return (
		<Col align='center' style={styles.bar}>
			<Row gap={3} style={style}>
				{data.entries.map((entry) => (
					<Nav active={entry.to === path} entry={entry} key={entry.to} />
				))}
			</Row>
		</Col>
	)
}
