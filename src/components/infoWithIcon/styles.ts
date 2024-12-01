import styled from "styled-components";

export const InfoWithIconContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  p {
    font-family: ${({theme})  => theme.fonts['regular']};
    color: ${({theme}) => theme.colors['base-text']};
    font-size: ${({theme}) => theme.textSizes['text-regular-m']};
    font-weight: 400;
  }
`
interface iconContainerProps {
  iconBg: string;
}
export const IconContainer = styled.div<iconContainerProps>`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background: ${({iconBg}) => iconBg} ;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({theme}) => theme.colors['background']};
`