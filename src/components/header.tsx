import * as stylex from '@stylexjs/stylex'

const styles = stylex.create({
	header: {
		backgroundColor: 'blue',
	},
})

export const Header = () => {
	return <div {...stylex.props(styles.header)}>Waku starter</div>
}
