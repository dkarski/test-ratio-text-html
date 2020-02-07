
import styled from 'styled-components'
import { lineHeight, fontSize } from 'styled-system'

export const Box = styled.div(lineHeight, fontSize);

export const Container = styled(Box).attrs(() => ({lineHeight: 4, fontSize: 2}))({})
Container.defaultProps = {lineHeight: 3}
