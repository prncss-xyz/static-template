'use client'
import { useEffect } from 'react'

function DevStyleXInjectImpl() {
	useEffect(() => {
		if (import.meta.env.DEV) {
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			// @ts-expect-error
			import('virtual:stylex:css-only')
		}
	}, [])
	return <link href='/virtual:stylex.css' rel='stylesheet' />
}

export function DevStyleXInject({ cssHref }: { cssHref: string }) {
	return import.meta.env.DEV ? (
		<DevStyleXInjectImpl />
	) : (
		cssHref && <link href={cssHref} rel='stylesheet' />
	)
}
