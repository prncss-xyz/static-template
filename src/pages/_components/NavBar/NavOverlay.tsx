import { Dialog } from '@base-ui/react/dialog'
import { create, props, StyleXStyles } from '@stylexjs/stylex'
import { useState } from 'react'
import { FaBars } from 'react-icons/fa'
import { IoClose } from 'react-icons/io5'
import { Link, useRouter } from 'waku'

import { Box, Col, Row } from '@/components/Box'
import { colorStyles } from '@/components/sharedStyles'
import { fontFamilies, fontSizes } from '@/components/tokens.stylex'

import { Data, Entry } from './data'

const styles = create({
	close: {
		alignSelf: 'flex-end',
	},
	full: {
		bottom: 0,
		left: 0,
		position: 'absolute',
		right: 0,
		top: 0,
	},
	h2: {
		fontFamily: fontFamilies.heading,
		fontSize: fontSizes[5],
		fontWeight: 'bold',
		textAlign: 'center',
	},
	nav: {
		textAlign: 'center',
	},
})

function Nav({
	active,
	entry,
	onClick,
	style,
}: {
	active: boolean
	entry: Entry
	onClick?: () => void
	style?: StyleXStyles
}) {
	return (
		<Box
			as={Link}
			key={entry.to}
			onClick={onClick}
			p={4}
			style={[active && colorStyles.inverse, styles.nav, style]}
			to={entry.to as any}
		>
			{entry.title}
		</Box>
	)
}

export function NavOverlay({
	data,
	style,
}: {
	data: Data
	style?: StyleXStyles
}) {
	const { path } = useRouter()
	const [open, setOpen] = useState(false)
	const close = () => setOpen(false)
	return (
		<Dialog.Root onOpenChange={setOpen} open={open}>
			<Dialog.Trigger>
				<Row
					as={Dialog.Trigger}
					justify='end'
					p={4}
					size='fullWidth'
					style={[colorStyles.direct, style]}
				>
					<FaBars size={24} {...props(colorStyles.direct)} />
				</Row>
			</Dialog.Trigger>
			<Dialog.Portal>
				<Dialog.Popup {...props(colorStyles.direct)}>
					<Dialog.Backdrop {...props(styles.full, colorStyles.direct)} />
					<div {...props(styles.full)}>
						<Col justify='between' size='fullHeight'>
							<Col gap={4} p={4} style={colorStyles.direct}>
								<Dialog.Close {...props(styles.close)}>
									<IoClose size={32} />
								</Dialog.Close>
								<Dialog.Title {...props(styles.h2)}>{data.title}</Dialog.Title>
							</Col>
							<Col justify='center' size='fullHeight'>
								{data.entries.map((entry) => (
									<Nav
										active={entry.to === path}
										entry={entry}
										key={entry.to}
										onClick={close}
									/>
								))}
							</Col>
						</Col>
					</div>
				</Dialog.Popup>
			</Dialog.Portal>
		</Dialog.Root>
	)
}
