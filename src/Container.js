import styled from '@emotion/styled'
import shouldForwardProp from '@styled-system/should-forward-prop'
import { lineHeight, fontSize } from 'styled-system'

export const Box = styled('div',{shouldForwardProp})(lineHeight,fontSize);

