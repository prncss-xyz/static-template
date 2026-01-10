import slugify from '@sindresorhus/slugify'
import z from 'zod'

import { mapKey } from '@/utils'

import { airtable } from '../core'

const schema = z.array(
	z
		.object({
			fields: z
				.object({
					Contents: z.string().default(''),
					Images: z
						.array(z.object({ url: z.string() }))
						.default([])
						.transform((is) => is.map(({ url }) => url)),
					Section: z.string().default(''),
					Title: z.string().default(''),
				})
				.transform(({ Contents, Images, Section, Title }) => ({
					contents: Contents,
					images: Images,
					section: Section,
					title: Title,
				})),
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
		rows.filter((row) => Boolean(row.section)).reverse(),
		(row) => row.section,
	),
)

export const contentsBySlug = contentsBySection.then(mapKey(slugify))
