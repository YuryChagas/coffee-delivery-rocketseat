import styled from "styled-components";

export const CompleteOrderFormContainer = styled.div`
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

export const SectionBaseStyle = styled.div`
  width: 100%;
  background: ${({theme}) => theme.colors['base-card']};
  border-radius: 6px;
  padding: 2.5rem;
`

export const AddressFormContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 12.5rem 17.5rem 3.75rem;
  column-gap: 0.75rem;
  row-gap: 1rem;
  grid-auto-flow: dense;

  .cep {
    grid-column: span 3;
    max-width: 12.5rem;
  }

  .street {
    grid-column: span 3;
  }

  .complement {
    grid-column: span 2;
  }
`

export const PaymentMethodOptionsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.75rem;

  >p {
    grid-column: span 3;
    font-size: 0.875rem;
    color: ${({theme}) => theme.colors['base-error']};
  }
`