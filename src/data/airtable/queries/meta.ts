import z from 'zod'

import { airtable } from '../core'

const metaSchema = z.object({
	title: z.string(),
})

const schema = z
	.array(
		z
			.object({
				fields: z.object({
					Key: z.string().default(''),
					Value: z.string().default(''),
				}),
			})
			.transform(({ fields: { Key, Value } }) => [Key, Value] as const),
	)
	.transform((rows) =>
		metaSchema.parse(Object.fromEntries(rows.filter(([key]) => key !== ''))),
	)

const metaP = airtable
	/* eslint-disable @cspell/spellchecker */
	.base('appn0HcR7VtNjIEiG')
	/* eslint-disable @cspell/spellchecker */
	.table('tbl7AZI43aikb4jws')
	.select()
	.all()
	.then(schema.parseAsync)

export function getMeta() {
	return metaP
}
