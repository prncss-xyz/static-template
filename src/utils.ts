export function indexed<T>(getIndex: (row: T) => string) {
	return (rows: T[]) => {
		let index: Record<string, T> = {}
		for (const row of rows) {
			index[getIndex(row)] = row
		}
		return index
	}
}

export function mapKey<T>(mapper: (value: string) => string) {
	return (obj: Record<string, T>) => {
		return Object.fromEntries(
			Object.entries(obj).map(([key, value]) => [mapper(key), value]),
		)
	}
}
