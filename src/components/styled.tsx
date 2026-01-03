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
	// recipe (vanilla-extract recipe may expose variants as function or object)
	if (r.variants) {
		const v =
			typeof r.variants === 'function' ? r.variants() : Object.keys(r.variants)
		return new Set(v)
	}
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
		let varClassName = typeof r === 'string' ? r : r(varProps)
		// ensure the recipe base/class is included; some vanilla-extract recipes expose a className
		if (typeof r !== 'string') {
			const base = (r as any).className ?? r({})
			if (base) {
				if (!varClassName) varClassName = base
				else if (!varClassName.includes(base))
					varClassName = varClassName + ' ' + base
			}
		}
		const className = props.className
			? varClassName + ' ' + props.className
			: varClassName
		return <Component {...elemProps} className={className} />
	}
}
