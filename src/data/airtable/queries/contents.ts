import slugify from '@sindresorhus/slugify'
import z from 'zod'

import { mapKey } from '@/utils'

import { airtable } from '../core'

const schema = z.array(
	z
		.object({
			fields: z.object({
				Contents: z.string().default(''),
				Images: z
					.array(z.object({ url: z.string() }))
					.default([])
					.transform((is) => is.map(({ url }) => url)),
				Section: z.string().default(''),
				Title: z.string().default(''),
			}),
		})
		.transform(({ fields }) => fields),
)

export const allContents = airtable
	/* eslint-disable @cspell/spellchecker */
	.base('app1h1sNhPySdTHMO')
	/* eslint-disable @cspell/spellchecker */
	.table('tblry9Zngfymy3css')
	.select()
	.all()
	.then(schema.parseAsync)

export const contentsBySection = allContents.then((rows) =>
	Object.groupBy(
		rows.filter((row) => Boolean(row.Section)).reverse(),
		(row) => row.Section,
	),
)

export const contentsBySlug = contentsBySection.then(mapKey(slugify))
