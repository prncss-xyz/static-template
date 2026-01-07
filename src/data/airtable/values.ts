import z from 'zod'

import { base } from './core'

/* eslint-disable @cspell/spellchecker */
const mainTable = base.table('tbl7AZI43aikb4jws')

const schema = z.array(
	z
		.object({
			fields: z.object({ Key: z.string(), Value: z.string() }),
		})
		.transform(({ fields: { Key, Value } }) => [Key, Value] as const),
)

export const getAllValues = () =>
	mainTable
		.select()
		.all()
		.then(schema.parseAsync)
		.then((rows) => Object.fromEntries(rows))
