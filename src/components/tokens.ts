import { create } from '@stylexjs/stylex'

const spaces = {
	1: 1,
	2: 2,
	3: 4,
	4: 8,
	5: 16,
	none: 0,
}

export const gapVariant = create({
	1: { gap: spaces[1] },
	2: { gap: spaces[2] },
	3: { gap: spaces[3] },
	4: { gap: spaces[4] },
	5: { gap: spaces[5] },
	none: { gap: spaces.none },
})

export const flexVariant = create({
	column: {
		display: 'flex',
		flexDirection: 'column',
	},
	row: {
		display: 'flex',
		flexDirection: 'row',
	},
})
