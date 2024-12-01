import styled from "styled-components";
import backgroundIntro from '../../../../assets/BackgroundIntro.png'

export const HomeIntroContainer = styled.section`
  width: 100%;
  height: 34rem;
  background: ${() => `url(${backgroundIntro})no-repeat center`};
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const IntroContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    section {
      width: 37rem;
    }

    h1 {
      font-family: ${({theme}) => theme.fonts['title']};
      font-size: ${({theme}) => theme.textSizes['title-xl']};
      color: ${({theme}) => theme.colors['base-title']};
      line-height: 130%;
      font-weight: bold;
    }

    h3 {
      margin-top: 1rem;
      font-family: ${({theme}) => theme.fonts['regular']};
      font-size: ${({theme}) => theme.textSizes['text-regular-l']};
      color: ${({theme}) => theme.colors['base-subtitle']};
      line-height: 130%;
      font-weight: 400;
    }
`
export const IntroItensContainer = styled.div`
  margin-top: 4.125rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 1.25rem;
`
