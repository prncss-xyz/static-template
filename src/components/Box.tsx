// source: https://github.com/TheMightyPenguin/dessert-box/blob/main/packages/react/src/index.ts
// source: https://github.com/kripod/react-polymorphic-box
import { create, props, StyleXStyles } from '@stylexjs/stylex'

import { spaces } from './tokens.stylex'

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

const paddingVariants = create({
	1: { padding: spaces[1] },
	2: { padding: spaces[2] },
	3: { padding: spaces[3] },
	4: { padding: spaces[4] },
	5: { padding: spaces[5] },
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
	p?: keyof typeof paddingVariants
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
	style,
	...rest
}: BoxProps<E>) {
	const Element = as || defaultElement
	return (
		<Element
			{...rest}
			{...props(
				flex && flexVariants[flex],
				p && paddingVariants[p],
				gap && gapVariants[gap],
				align && alignVariants[align],
				justify && justifyVariants[justify],
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
