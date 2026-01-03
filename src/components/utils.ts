export function oMap<K extends PropertyKey, A, B>(
	o: Record<K, A>,
	mapper: (a: A) => B,
) {
	return Object.fromEntries<B>(
		Object.entries<A>(o).map(([k, v]) => [k, mapper(v)]),
	) as Record<K, B>
}

if (import.meta.vitest) {
	const { expect, expectTypeOf, test } = import.meta.vitest
	test('oMap', () => {
		expect(oMap({ a: 1, b: 2 }, (a) => a + '!')).toEqual({ a: '1!', b: '2!' })
		expectTypeOf(oMap({ a: 1, b: 2 }, (a) => a + '!')).toEqualTypeOf<{
			a: string
			b: string
		}>()
	})
}
