import styled, { css } from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  height: 6.5rem;
  padding: 2rem 0;
  background: ${({theme}) => theme.colors['background']};
  position: sticky;
  top: 0;
  left: o;
  z-index: 5;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`

export const HeaderButtonsContainer = styled.div`
  display: flex;
  gap: 0.75rem;
`
interface HeaderButtonProps {
  color: 'purple' | 'yellow';
}

export const HeeaderButton = styled.button<HeaderButtonProps>`
display: flex;
align-items: center;
gap: 0.5rem;
padding: 0.5rem;
position: relative;
border-radius: 6px;
border: none;
gap: 4px;
font-size: ${({theme}) => theme.textSizes['text-regular-s']};
cursor: inherit;

span{
  position: absolute;
  width: 1.25rem;
  height: 1.25rem;
  border-radius: 50%;
  top: calc(-1.25rem / 2);
  right: calc(-1.25rem / 2);
  color: ${({theme}) => theme.colors['white']};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
  font-weight: 700;
}


${({color, theme}) =>
 css`
  background: ${({theme}) => theme.colors[`${color}-light`]};
  color: ${({theme}) => theme.colors[`${color}-dark`]};

  span{
    background: ${theme.colors[`${color}-dark`]}
  }
  `}

${({color, theme}) => color === 'purple' &&
 css`
  svg: ${ theme.colors['purple']}
  `}
`