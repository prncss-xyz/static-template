'use client'

import { useState } from 'react'

// ensure box css is included in client bundle so styles are linked
import './box/index.css'

export const Counter = () => {
	const [count, setCount] = useState(0)

	const handleIncrement = () => setCount((c) => c + 1)

	return (
		<section className='border-blue-400 -mx-4 mt-4 rounded-sm border border-dashed p-4'>
			<div>Count: {count}</div>
			<button onClick={handleIncrement}>Increment</button>
		</section>
	)
}
