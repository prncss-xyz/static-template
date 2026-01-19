import slugify from '@sindresorhus/slugify'
import z from 'zod'

import { airtable } from '../airtable'
import { site } from './site'

const { home } = site
const schema = z
	.array(
		z
			.object({
				fields: z
					.object({
						Contents: z.string().default(''),
						Images: z
							.array(z.object({ url: z.string() }))
							.default([])
							.transform((is) => is.map(({ url }) => url)),
						Title: z.string().default(''),
					})
					.transform(async ({ Contents, Images, Title }) => {
						const slug = slugify(Title)
						return {
							contents: Contents,
							images: Images,
							slug: slug === home ? '' : slug,
							title: Title,
						}
					}),
			})
			.transform(({ fields }) => fields),
	)
	.transform((rows) => rows.filter(({ title }) => title !== ''))

export const allContents = airtable
	/* eslint-disable @cspell/spellchecker */
	.base('app1h1sNhPySdTHMO')
	/* eslint-disable @cspell/spellchecker */
	.table('tblry9Zngfymy3css')
	.select({
		view: 'Grid view',
	})
	.all()
	.then(schema.parseAsync)

export async function getPages() {
	return allContents
}

export async function getPageSlugs() {
	const contents = await allContents
	return contents.map((content) => content.slug).filter(Boolean)
}

export async function getPage(slug: string) {
	const contents = await allContents
	const data = contents.find((content) => content.slug === slug)
	if (!data) throw new Error('Not found')
	return data
}
