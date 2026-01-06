import { create, props, StyleXStyles } from '@stylexjs/stylex'

const styles = create({
	root: {
		bottom: 0,
		height: '100vh',
		left: 0,
		position: 'absolute',
		right: 0,
		top: 0,
		width: '100vw',
	},
})

export function Overlay({
	children,
	style,
}: {
	children?: React.ReactNode
	style?: StyleXStyles
}) {
	return <div {...props(style, styles.root)}>{children}</div>
}
