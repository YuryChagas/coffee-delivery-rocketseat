import styled from "styled-components";
import { SectionBaseStyle } from "../CompleteOrderForm/styles";

export const SelectedCoffeesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  width: 40rem;

  h2 {
    margin-top: 1rem;
      font-family: ${({theme}) => theme.fonts['title']};
      font-size: ${({theme}) => theme.textSizes['title-xs']};
      color: ${({theme}) => theme.colors['base-subtitle']};
      line-height: 130%;
      font-weight: bold;
  }
`

export const DetailerContainer = styled(SectionBaseStyle)`
  border-radius: 6px 44px 6px 44px;
  display: flex;
  flex-direction: column;
`

export const ConfirmationSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  p{
    font-family: ${({theme}) => theme.fonts['title']};
      font-size: ${({theme}) => theme.textSizes['text-regular-s']};
      color: ${({theme}) => theme.colors['base-subtitle']};
      line-height: 130%;
  }
`