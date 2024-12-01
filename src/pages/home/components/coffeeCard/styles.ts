import styled from "styled-components";

export const CoffeeCardConstainer = styled.div`
  width: 16rem;
  height: 19.375rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${({theme}) => theme.colors['base-card']};
  border-radius: 6px 36px;

  img{
    margin-top: -1.25rem;
    width: 120px;
    height: 120px;
  }
`

export const Tags = styled.div`
  display: flex;
  gap: 0.25rem;
  margin-top: 0.75rem;
  margin-bottom: 1rem;
  
  
  span {
    padding: 4px 8px;
    font-family: ${({theme}) => theme.fonts['regular']};
    font-size: ${({theme}) => theme.textSizes['components-tag']};
    font-weight: bold;
    text-transform: uppercase;
    color: ${({theme}) => theme.colors['yellow-dark']};
    border-radius: 100px;
    background: ${({theme}) => theme.colors['yellow-light']};
  }
`

export const Name = styled.h3`
    font-size: ${({theme}) => theme.textSizes['tile-s']};
    color: ${({theme}) => theme.colors['base-subtitled']};
    line-height: 130%;
`

export const Description = styled.p`
    width: 13.5rem;
    font-family: ${({theme}) => theme.fonts['regular']};
    font-size: ${({theme}) => theme.textSizes['text-regular-s']};
    line-height: 130%;
    color: ${({theme}) => theme.colors['base-label']};
    margin-top: 0.5rem;
    text-align: center;
`

export const CardFooterContainer = styled.footer`
  width: 100%;
  padding: 0 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 2.0625rem;
`

export const TextValue = styled.div`
  display: flex;
  justify-content: center;
  align-items: baseline;

  p{
    margin-right: 3px;
    font-family: ${({theme}) => theme.fonts['regular']};
    font-size: ${({ theme }) => theme.textSizes['text-regular-s']};
    color: ${({theme}) => theme.colors['base-text']};
    line-height: 130%;
  }

  h3{
    font-family: ${({theme}) => theme.fonts['title']};
    font-size: ${({ theme }) => theme.textSizes['title-m']};
    color: ${({theme}) => theme.colors['base-text']};
    line-height: 130%;
  }
`

export const InputAndCartShopping = styled.div`
  width: 7.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`

export const ButtonCartAdd = styled.button.attrs({type: 'button'})`
  width: 2.375rem;
  height: 2.375rem;
  padding: 0.5rem;
  margin: none;
  background: ${({theme}) => theme.colors['purple-dark']};
  border-radius:6px;
  border: none;
  text-align: center;
  align-items: center;
  color: ${({theme}) => theme.colors['base-card']};
`
