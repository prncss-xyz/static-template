import fs from 'node:fs/promises'
import path from 'node:path'
import sharp from 'sharp'

const ASSET_DIR = './public'
const CACHE_DIR = '/gen'

async function getHash(input: string): Promise<string> {
	const msgUint8 = new TextEncoder().encode(input)
	const hashBuffer = await crypto.subtle.digest('SHA-256', msgUint8)
	const hashArray = Array.from(new Uint8Array(hashBuffer))
	return hashArray
		.map((b) => b.toString(16).padStart(2, '0'))
		.join('')
		.slice(0, 12)
}

const dir = ASSET_DIR + CACHE_DIR
async function getResponsiveImage(remoteUrl: string) {
	await fs.mkdir(dir, { recursive: true })
	const fileName = await getHash(remoteUrl)

	const widths = [640, 1024, 1920]
	const response = await fetch(remoteUrl)
	const buffer = Buffer.from(await response.arrayBuffer())

	const sources = await Promise.all(
		widths.map(async (w) => {
			const name = `${fileName}-${w}.webp`
			const outputPath = path.join(dir, name)

			// Only process if it doesn't exist to speed up builds
			try {
				await fs.stat(outputPath)
			} catch {
				await sharp(buffer).resize(w).webp().toFile(outputPath)
			}
			return `${CACHE_DIR}/${name} ${w}w`
		}),
	)

	return {
		src: `${CACHE_DIR}/${fileName}-1024.webp`,
		srcSet: sources.join(', '),
	}
}

export async function RespImage({ alt, url }: { alt: string; url: string }) {
	const { src, srcSet } = await getResponsiveImage(url)
	return <img alt={alt} src={src} srcSet={srcSet} />
}
