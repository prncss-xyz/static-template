import { props } from '@stylexjs/stylex'

import { fontSizes } from '../tokens'
import { ElemProps } from './types'

export function Small({ style, ...rest }: ElemProps<'small'>) {
	return <small {...rest} {...props(fontSizes[5], style)} />
}
