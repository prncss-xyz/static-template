import slugify from '@sindresorhus/slugify'
import z from 'zod'

import { airtable } from '../airtable'

const siteSchema = z.object({
	blog: z.string().transform((s) => slugify(s)),
	description: z.string(),
	home: z.string().transform((s) => slugify(s)),
	lang: z.string(),
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
		siteSchema.parse(Object.fromEntries(rows.filter(([key]) => key !== ''))),
	)

export const site = await airtable
	/* eslint-disable @cspell/spellchecker */
	.base('appn0HcR7VtNjIEiG')
	/* eslint-disable @cspell/spellchecker */
	.table('tbl7AZI43aikb4jws')
	.select()
	.all()
	.then(schema.parseAsync)
