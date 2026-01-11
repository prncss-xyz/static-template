import { defineVars } from '@stylexjs/stylex'

export const colors = defineVars({
	background: 'black',
	text: 'white',
})

export const fontFamilies = defineVars({
	// eslint-disable-next-line @cspell/spellchecker
	base: 'playfair, sans-serif',
	// eslint-disable-next-line @cspell/spellchecker
	heading: 'playfair, sans-serif',
})

export const fontSizes = defineVars({
	1: '0.67rem',
	// small
	2: '0.83rem',
	3: '1rem',
	4: '1.17rem',
	5: '1.5rem',
	6: '2rem',
})

// TODO:
export const spaces = defineVars({
	1: '1px',
	2: '2px',
	3: '4px',
	4: '8px',
	5: '16px',
	6: '32px',
	7: '64px',
	8: '128px',
})
