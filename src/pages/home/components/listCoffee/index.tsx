import { coffees } from "../../../../data/coffees";
import { CoffeCard } from "../coffeeCard";
import { ListCardsCoffeeContainer, ListCoffeeContainer } from "./styles";

export function ListCoffee() {
  return (
    <ListCoffeeContainer className="container">
      <h1>Nossos cafés</h1>
      <ListCardsCoffeeContainer>
        {coffees.map(coffee => (
          <CoffeCard key={coffee.id} coffee={coffee}/>
        ))}
      </ListCardsCoffeeContainer>
    </ListCoffeeContainer>
    
  )
}