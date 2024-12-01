import styled from "styled-components";

export const CoffeeCartCardContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  border-bottom: 1px solid ${({ theme }) => theme.colors['base-button']};
  padding-bottom: 1.5rem;
  margin-bottom: 1.5rem;

  > div {
    display: flex;
    align-items: center;
    gap: 1.25rem; //
    img {
      height: 4rem;
      width: 4rem;
    }
  }

h3{
    font-family: ${({theme}) => theme.fonts['regular']};
      font-size: ${({theme}) => theme.textSizes['text-regular-m']};
      color: ${({theme}) => theme.colors['base-subtitle']};
      line-height: 130%;
      font-weight: 400;
  }

  > p {
    align-self: flex-start;
    font-weight: 700;
  }
`

export const ActionsContainer = styled.div`
  margin-top: 0.5rem;
  height: 2rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  > div {
    max-width: 4.5rem;
    height: 100%;
  }
`

export const RemoveButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  color: ${({ theme }) => theme.colors["base-text"]};
  font-size: 0.75rem;
  height: 100%;
  border: none;
  background: ${({ theme }) => theme.colors["base-button"]};
  padding: 0 0.5rem;
  border-radius: 6px;
  transition: 0.4s;

  svg{
    color: ${({ theme }) => theme.colors["purple"]};
  }

  &:hover {
    background: ${({ theme }) => theme.colors["base-hover"]};
  }
`