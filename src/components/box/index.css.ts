import { recipe } from '@vanilla-extract/recipes'

import { spaces } from '../tokens'
import { oMap } from '../utils'

export const style = recipe({
	base: {
		backgroundColor: 'red',
		boxSizing: 'border-box',
	},
	variants: {
		align: {
			center: { alignItems: 'center' },
			end: { alignItems: 'flex-end' },
			start: { alignItems: 'flex-start' },
		},
		flex: {
			col: { display: 'flex', flexDirection: 'column' },
			row: { display: 'flex', flexDirection: 'row' },
		},
		p: oMap(spaces, (v) => ({ padding: v })),
		textAlign: {
			center: { textAlign: 'center' },
			left: { textAlign: 'left' },
			right: { textAlign: 'right' },
		},
	},
})
