import styled from "styled-components";

export const SectionTitleContainer = styled.div`
  display: flex;
  gap: 0.5rem;

  h3{
    font-family: ${({theme}) => theme.fonts['regular']};
      font-size: ${({theme}) => theme.textSizes['text-regular-m']};
      color: ${({theme}) => theme.colors['base-subtitle']};
      line-height: 130%;
      font-weight: 400;
  }

  p{
    font-family: ${({theme}) => theme.fonts['title']};
      font-size: ${({theme}) => theme.textSizes['text-regular-s']};
      color: ${({theme}) => theme.colors['base-subtitle']};
      line-height: 130%;
  }

  span{
    font-family: ${({theme}) => theme.fonts['regular']};
      font-size: ${({theme}) => theme.textSizes['text-regular-m']};
      color: ${({theme}) => theme.colors['base-text']};
      line-height: 130%;
      font-weight: 400;
  }

  h{
    font-family: ${({theme}) => theme.fonts['regular']};
      font-size: ${({theme}) => theme.textSizes['text-regular-l']};
      color: ${({theme}) => theme.colors['base-subtitle']};
      line-height: 130%;
      font-weight: 700;
  }
`