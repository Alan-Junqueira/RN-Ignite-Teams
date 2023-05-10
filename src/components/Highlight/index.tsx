import React from 'react'
import { HighlightContainer, HighlightSubtitle, HighlightTitle } from './styled'

interface IHighlight {
  title: string
  subtitle: string
}

export const Highlight = ({ subtitle, title }: IHighlight) => {
  return (
    <HighlightContainer>
      <HighlightTitle>{title}</HighlightTitle>
      <HighlightSubtitle>{subtitle}</HighlightSubtitle>
    </HighlightContainer>
  )
}
