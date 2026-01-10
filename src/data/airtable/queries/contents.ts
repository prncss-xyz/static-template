import slugify from '@sindresorhus/slugify'
import z from 'zod'

import { getResponsiveImage } from '@/getResponsiveImage'
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
				.transform(async ({ Contents, Images, Section, Title }) => {
					const images = await Promise.all(
						Images.map((url) => getResponsiveImage(url, Title)),
					)
					return {
						contents: Contents,
						images,
						section: Section,
						title: Title,
					}
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

const contentsBySectionP = allContents.then((rows) => {
	const res = Object.groupBy(
		rows.filter((row) => Boolean(row.section)),
		(row) => row.section,
	)
	Object.values(res).forEach((item) => item!.reverse())
	return res
})

export function getContentsBySection() {
	return contentsBySectionP
}

const contentsBySlugP = contentsBySectionP.then(mapKey(slugify))

export async function listSlugs() {
	const contents = await contentsBySlugP
	return Object.keys(contents)
}

export async function getSectionBySlug(slug: string) {
	const contents = await contentsBySlugP
	const data = contents[slug]
	if (!data) throw new Error('Not found')
	const data0 = data[0]
	if (!data0) throw new Error('Empty')
	return {
		data,
		name: data0.title,
	}
}
