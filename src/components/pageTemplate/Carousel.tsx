import { getResponsiveImage } from '@/images/getResponsiveImage'

import { CarouselClient } from './CarouselClient'

export async function Carousel({
	alt,
	images,
}: {
	alt?: string
	images: string[]
}) {
	const respImages = await Promise.all(
		images.map((image) => getResponsiveImage(image, alt)),
	)
	return <CarouselClient images={respImages} />
}
