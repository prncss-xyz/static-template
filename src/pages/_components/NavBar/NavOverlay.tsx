import { Dialog } from '@base-ui/react/dialog'
import { create, props, StyleXStyles } from '@stylexjs/stylex'
import { useState } from 'react'
import { FaBars } from 'react-icons/fa'
import { IoClose } from 'react-icons/io5'
import { Link, useRouter } from 'waku'

import { Box, Col, Row } from '@/components/Box'
import { colorStyles } from '@/components/colorStyles'
import { fontFamilies, fontSizes } from '@/components/tokens.stylex'

import { defaultTitle, entries, Entry } from './data'

const styles = create({
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
	},
	nav: {
		textAlign: 'center',
	},
	top: {
		left: 0,
		position: 'absolute',
		right: 0,
		top: 0,
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

export function NavOverlay({ style }: { style?: StyleXStyles }) {
	const { path } = useRouter()
	const current = entries.find((entry) => entry.to === path)
	const title = current?.title ?? defaultTitle
	const [open, setOpen] = useState(false)
	const close = () => setOpen(false)
	return (
		<Dialog.Root onOpenChange={setOpen} open={open}>
			<Row
				as={Dialog.Trigger}
				justify='between'
				p={4}
				size='fullWidth'
				style={[colorStyles.direct, style]}
			>
				<h2 style={styles.h2}>{title}</h2>
				<FaBars size={24} {...props(colorStyles.direct)} />
			</Row>
			<Dialog.Portal>
				<Dialog.Popup {...props(colorStyles.direct)}>
					<Dialog.Backdrop {...props(styles.full, colorStyles.direct)} />
					<div {...props(styles.full)}>
						<Col justify='center' size='fullHeight'>
							{entries.map((entry) => (
								<Nav
									active={entry.to === path}
									entry={entry}
									key={entry.to}
									onClick={close}
								/>
							))}
						</Col>
					</div>
					<div {...props(styles.top)}>
						<Col>
							<Row
								as={Dialog.Close}
								justify='between'
								p={4}
								style={colorStyles.direct}
							>
								<Dialog.Title {...props(styles.h2)}>
									{defaultTitle}
								</Dialog.Title>
								<IoClose size={32} {...props(colorStyles.direct)} />
							</Row>
						</Col>
					</div>
				</Dialog.Popup>
			</Dialog.Portal>
		</Dialog.Root>
	)
}
