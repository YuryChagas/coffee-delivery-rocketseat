import styled, { css } from "styled-components";

interface InputQuantityContainerProps {
  size?: "medium" | "small";
}

export const InputQuantityContainer = styled.div<InputQuantityContainerProps>`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  gap: 0.25rem;
  border-radius: 6px;
  background: ${({theme}) => theme.colors['base-button']};
  

  input{
    border: none;
    background: none;
    width: 100%;
    height: 2.375rem;
    text-align: center;
    font-family: ${({theme}) => theme.fonts['regular']};
    font-size: ${({theme}) => theme.textSizes['text-regular-m']};
    color: ${({theme}) => theme.colors['base-title']};

    input::-webkit-inner-spin-button {
    -webkit-appearance: none;
}

    &:focus{
      outline: none;
    }
    
  }

  ${({ size }) => size == "medium" && css`
    padding: 0 0.5rem;
  `}

  ${({ size }) => size == "small" && css`
    padding: 0.3rem 0.5rem;
  `}
`


export const IconButtonInput = styled.button.attrs({ type: 'button'})`
  width: 1.875rem;
  height: 1.875rem;
  border: none;
  background: none;
  color: ${({theme}) => theme.colors['purple']};
   

  &:disabled{
    opacity: 0.4;
  }

  &:not(:disabled):hover{
    color: ${({theme}) => theme.colors['purple-dark']};
  }
`