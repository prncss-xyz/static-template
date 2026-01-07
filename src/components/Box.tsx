// source: https://github.com/TheMightyPenguin/dessert-box/blob/main/packages/react/src/index.ts
// source: https://github.com/kripod/react-polymorphic-box
import { create, props, StyleXStyles } from '@stylexjs/stylex'

import { spaces } from './tokens.stylex'

const sizeVariants = create({
	fullHeight: {
		height: '100%',
	},
	fullSize: {
		height: '100%',
		width: '100%',
	},
	fullWidth: {
		width: '100%',
	},
})

const flexVariants = create({
	col: {
		display: 'flex',
		flexDirection: 'column',
	},
	row: {
		display: 'flex',
		flexDirection: 'row',
	},
})

const justifyVariants = create({
	around: {
		justifyContent: 'space-around',
	},
	between: {
		justifyContent: 'space-between',
	},
	center: {
		justifyContent: 'center',
	},
	end: {
		justifyContent: 'flex-end',
	},
	start: {
		justifyContent: 'flex-start',
	},
})

const alignVariants = create({
	baseline: {
		alignItems: 'baseline',
	},
	center: {
		alignItems: 'center',
	},
	end: {
		alignItems: 'flex-end',
	},
	start: {
		alignItems: 'flex-start',
	},
	stretch: {
		alignItems: 'stretch',
	},
})

const pVariants = create({
	1: { padding: spaces[1] },
	2: { padding: spaces[2] },
	3: { padding: spaces[3] },
	4: { padding: spaces[4] },
	5: { padding: spaces[5] },
})

const pxVariants = create({
	1: {
		paddingLeft: spaces[1],
		paddingRight: spaces[1],
	},
	2: {
		paddingLeft: spaces[1],
		paddingRight: spaces[1],
	},
	3: {
		paddingLeft: spaces[1],
		paddingRight: spaces[1],
	},
	4: {
		paddingLeft: spaces[1],
		paddingRight: spaces[1],
	},
	5: {
		paddingLeft: spaces[1],
		paddingRight: spaces[1],
	},
})

const pyVariants = create({
	1: {
		paddingBottom: spaces[1],
		paddingTop: spaces[1],
	},
	2: {
		paddingBottom: spaces[1],
		paddingTop: spaces[1],
	},
	3: {
		paddingBottom: spaces[1],
		paddingTop: spaces[1],
	},
	4: {
		paddingBottom: spaces[1],
		paddingTop: spaces[1],
	},
	5: {
		paddingBottom: spaces[1],
		paddingTop: spaces[1],
	},
})

const gapVariants = create({
	1: { gap: spaces[1] },
	2: { gap: spaces[2] },
	3: { gap: spaces[3] },
	4: { gap: spaces[4] },
	5: { gap: spaces[5] },
})

export type BoxBaseProps<E extends React.ElementType = React.ElementType> = {
	align?: keyof typeof alignVariants
	as?: E
	flex?: keyof typeof flexVariants
	gap?: keyof typeof gapVariants
	justify?: keyof typeof justifyVariants
	p?: keyof typeof pVariants
	px?: keyof typeof pxVariants
	py?: keyof typeof pyVariants
	size?: keyof typeof sizeVariants
	style?: StyleXStyles
}

type BoxProps<E extends React.ElementType> = BoxBaseProps<E> &
	Omit<React.ComponentProps<E>, keyof BoxBaseProps>

const defaultElement = 'div'

export function Box<E extends React.ElementType = typeof defaultElement>({
	align,
	as,
	flex,
	gap,
	justify,
	p,
	px,
	py,
	size,
	style,
	...rest
}: BoxProps<E>) {
	const Element = as || defaultElement
	return (
		<Element
			{...rest}
			{...props(
				flex && flexVariants[flex],
				p && pVariants[p],
				px && pxVariants[px],
				py && pyVariants[py],
				gap && gapVariants[gap],
				align && alignVariants[align],
				justify && justifyVariants[justify],
				size && sizeVariants[size],
				style,
			)}
		/>
	)
}

export function Row<E extends React.ElementType = typeof defaultElement>({
	...rest
}: BoxProps<E>) {
	return <Box flex='row' {...rest} />
}

export function Col<E extends React.ElementType = typeof defaultElement>({
	...rest
}: BoxProps<E>) {
	return <Box flex='col' {...rest} />
}
