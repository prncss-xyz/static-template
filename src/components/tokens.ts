import { create } from '@stylexjs/stylex'

const spaces = {
	1: 1,
	2: 2,
	3: 4,
	4: 8,
	5: 16,
	none: 0,
}

export const gap = create({
	1: { gap: spaces[1] },
	2: { gap: spaces[2] },
	3: { gap: spaces[3] },
	4: { gap: spaces[4] },
	5: { gap: spaces[5] },
	none: { gap: spaces.none },
})

export const fontSizes = create({
	1: {
		fontSize: '2rem',
	},
	2: {
		fontSize: '1.5rem',
	},
	3: {
		fontSize: '1.17rem',
	},
	4: {
		fontSize: '1rem',
	},
	5: {
		// small
		fontSize: '0.83rem',
	},
	6: {
		fontSize: '0.67rem',
	},
})
