import { ShoppingCart } from '@phosphor-icons/react';
import { InputQuantity } from '../../../../components/inputQuantity';
import { ButtonCartAdd, CardFooterContainer, CoffeeCardConstainer, Description, InputAndCartShopping, Name, Tags, TextValue } from "./styles";
import { formatMoney } from '../../../../utils/formatedMoney';
import { useCart } from '../../../../hooks/useCart';
import { useState } from 'react';

export interface Coffee {
  id: number;
  tags: string[];
  name: string;
  description: string;
  photo: string;
  price: number;
}

interface CoffeeProps {
  coffee: Coffee;
}
export function CoffeCard({ coffee }: CoffeeProps){
  const [ quantity, setQuatity ] = useState(1)

  function handleIncrease() {
    setQuatity(state => state + 1);
  }

  function handleDecrease() {
    setQuatity(state => state - 1);
  }

  const { addCoffeeToCart } = useCart();

  function handleAddToCart() {
    const coffeeToAdd = {
      ...coffee,
      quantity,
    }
    addCoffeeToCart(coffeeToAdd)
  }

  const formattedPrice = formatMoney(coffee.price);

  return (
    <CoffeeCardConstainer>
      <img src={`coffeesImg/${coffee.photo}`} />
      <Tags>
        {coffee.tags.map(tag => {
          return (
            <span key={`${coffee.id}${tag}`}>{tag}</span>
          )
        })}
      </Tags>
      <Name>{coffee.name}</Name>
      <Description>{coffee.description}</Description>
      <CardFooterContainer>
        <TextValue>
          <p>R$</p><h3>{formattedPrice}</h3>
        </TextValue>
        <InputAndCartShopping>
          <InputQuantity
            onIncrease = {handleIncrease}
            onDecrease = {handleDecrease}
            quantity = {quantity}
          />
          <ButtonCartAdd onClick={handleAddToCart}>
            <ShoppingCart weight='fill' size={22}/>
          </ButtonCartAdd>
        </InputAndCartShopping>       
      </CardFooterContainer>
    </CoffeeCardConstainer>
  )
}