import type { ComponentProps, ElementType, ReactNode } from 'react'

import { Prettify } from '../types'

const baseElement = 'div'

export function styled<DefaultElement extends ElementType = 'div'>(
	r: string,
	defaultElement?: string,
): <T extends ElementType = DefaultElement>({
	as,
	...props
}: ComponentProps<T> & {
	as?: T
}) => ReactNode
export function styled<
	R extends (p: Record<never, unknown>) => string = (
		p: Record<never, unknown>,
	) => string,
	DefaultElement extends ElementType = 'div',
>(
	r: R | string,
	defaultElement?: string,
): <T extends ElementType = DefaultElement>({
	as,
	...props
}: ComponentProps<T> &
	Prettify<
		Parameters<R>[0] & {
			as?: T
		}
	>) => ReactNode
export function styled<
	R extends (p: Record<never, unknown>) => string = (
		p: Record<never, unknown>,
	) => string,
	DefaultElement extends ElementType = typeof baseElement,
>(r: R | string, defaultElement = baseElement) {
	const c = core(r)
	return function Styled<T extends ElementType = DefaultElement>({
		as,
		...props
	}: ComponentProps<T> &
		Parameters<R>[0] & {
			as?: T
		}) {
		return c(as ?? defaultElement, props)
	}
}

const coreProps = new Set(['as', 'className'])

function getVarKeys(r: any) {
	// className
	if (typeof r === 'string') return new Set()
	// recipe
	if (r.variants) return new Set((r as any).variants())
	// sprinkle
	if (r.properties) return r.properties // TODO: do we need to bind
	throw new Error('cannot handle this')
}

function core(r: ((p: object) => string) | string) {
	const varKeys = getVarKeys(r)
	return function (Component: any, props: any) {
		const varProps: any = {}
		const elemProps: any = {}
		for (const [k, v] of Object.entries(props)) {
			if (coreProps.has(k)) continue
			if (varKeys.has(k)) varProps[k] = v
			else elemProps[k] = v
		}
		const varClassName = typeof r === 'string' ? r : r(varProps)
		const className = props.className
			? varClassName + ' ' + props.className
			: varClassName
		return <Component {...elemProps} className={className} />
	}
}
