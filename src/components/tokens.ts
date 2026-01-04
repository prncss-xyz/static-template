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
	3: { gap: spaces[3] },
	none: { gap: spaces.none },
})
