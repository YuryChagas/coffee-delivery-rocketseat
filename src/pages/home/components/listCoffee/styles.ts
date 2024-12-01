import styled from "styled-components";

export const ListCoffeeContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`

export const ListCardsCoffeeContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 2rem;
  row-gap: 2.5rem;
  margin-top: 3.5rem;
`