import { useCart } from "../../../../hooks/useCart";
import { CoffeeCartCard } from "../CoffeeCartCard";
import { ConfirmationSection } from "./ConfirmationSection";
import { DetailerContainer, SelectedCoffeesContainer } from "./styles";

export function SelectedCoffees (){
  const { cartItems } = useCart();

  return (
    <SelectedCoffeesContainer>
      <h2>Cafés selecionados</h2>
      <DetailerContainer>
        {  cartItems.map((item) => (
          <CoffeeCartCard key={item.id} coffee={item} />
        )) }
        <ConfirmationSection/>
      </DetailerContainer>
    </SelectedCoffeesContainer>
  )
}