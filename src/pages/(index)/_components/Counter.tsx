'use client'

import { Button } from '@base-ui/react'
import { create, props } from '@stylexjs/stylex'
import { useState } from 'react'

const styles = create({
	button: {
		color: 'green',
	},
})

export const Counter = () => {
	const [count, setCount] = useState(0)

	return (
		<section>
			<div>Count: {count}</div>
			<Button onClick={() => setCount((c) => c + 1)} {...props(styles.button)}>
				Increment
			</Button>
		</section>
	)
}
