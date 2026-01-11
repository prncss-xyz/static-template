import fs from 'node:fs/promises'
import path from 'node:path'
import { ComponentProps } from 'react'
import sharp from 'sharp'

import { basePath } from '../basePath'

const dest = './dist/public/'

async function getHash(input: string): Promise<string> {
	const msgUint8 = new TextEncoder().encode(input)
	const hashBuffer = await crypto.subtle.digest('SHA-256', msgUint8)
	const hashArray = Array.from(new Uint8Array(hashBuffer))
	return hashArray
		.map((b) => b.toString(16).padStart(2, '0'))
		.join('')
		.slice(0, 12)
}

export async function getResponsiveImage(remoteUrl: string, alt?: string) {
	await fs.mkdir(dest, { recursive: true })
	const hash = await getHash(remoteUrl)

	const widths = [640, 1024, 1920]
	const response = await fetch(remoteUrl)
	const buffer = Buffer.from(await response.arrayBuffer())

	const sources = await Promise.all(
		widths.map(async (w) => {
			const name = `${hash}-${w}.webp`
			const outputPath = path.join(dest, name)
			// Only process if it doesn't exist to speed up builds
			try {
				await fs.stat(outputPath)
			} catch {
				await sharp(buffer).resize(w).webp().toFile(outputPath)
			}
			return `${basePath}${name} ${w}w`
		}),
	)

	return {
		alt,
		src: `${basePath}${hash}-1024.webp`,
		srcSet: sources.join(', '),
	}
}

export type ImageProps = ComponentProps<'img'>
