import { ReactNode } from 'react'

import { A } from '../elements/A'
import { Blockquote } from '../elements/Blockquote'
import { H1, H2, H3 } from '../elements/Heading'
import { Ol } from '../elements/Ol'
import { P } from '../elements/P'
import { Ul } from '../elements/Ul'
import { createMD } from './createMD'

const elems = {
	a: A,
	blockquote: Blockquote,
	h1: H1,
	h2: H2,
	h3: H3,
	ol: Ol,
	p: P,
	ul: Ul,
}
export const MD = createMD(elems)

function Frag({ children }: { children?: ReactNode }) {
	return <>{children}</>
}

export const MDFrag = createMD({ ...elems, frag: Frag })
