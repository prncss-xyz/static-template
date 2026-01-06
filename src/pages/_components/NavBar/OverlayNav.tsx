import { Dialog } from '@base-ui/react/dialog'
import { create, props, StyleXStyles } from '@stylexjs/stylex'
import { FaBars } from 'react-icons/fa'
import { IoClose } from 'react-icons/io5'
import { useRouter } from 'waku'

import { Row } from '@/components/Box'
import { colorStyles } from '@/components/colorStyles'
import { Overlay } from '@/components/Overlay'

import { defaultTitle, entries } from './data'

const styles = create({
	backdrop: {
		backgroundColor: 'pink',
	},
	popup: {
		backgroundColor: 'red',
		height: '90vh',
		position: 'absolute',
		right: 0,
		top: 0,
		width: '90vw',
	},
	trigger: {
		width: '100vw',
	},
})

export function OverlayNav({ style }: { style?: StyleXStyles }) {
	const { path } = useRouter()
	const current = entries.find((entry) => entry.to === path)
	const title = current?.title ?? defaultTitle
	return (
		<Dialog.Root>
			<Dialog.Trigger
				render={
					<Row
						as='button'
						gap={4}
						justify='between'
						style={[styles.trigger, colorStyles.direct, style]}
					>
						<div>{title}</div>
						<FaBars />
					</Row>
				}
			/>
			<Dialog.Portal {...props(style)}>
				<Dialog.Backdrop>{<Overlay style={styles.backdrop} />}</Dialog.Backdrop>
				<Dialog.Popup {...props(styles.popup)}>
					<Dialog.Title>{title}</Dialog.Title>
					<Dialog.Close>
						<IoClose />
					</Dialog.Close>
				</Dialog.Popup>
			</Dialog.Portal>
		</Dialog.Root>
	)
}
