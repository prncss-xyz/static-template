import { StyleXStyles } from '@stylexjs/stylex'
import { Link, useRouter } from 'waku'

import { Box, Row } from '@/components/Box'
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

export function NavBar({ data, style }: { data: Data; style?: StyleXStyles }) {
	const { path } = useRouter()
	return (
		<Row gap={3} justify='between' style={style}>
			{data.entries.map((entry) => (
				<Nav active={entry.to === path} entry={entry} key={entry.to} />
			))}
		</Row>
	)
}
