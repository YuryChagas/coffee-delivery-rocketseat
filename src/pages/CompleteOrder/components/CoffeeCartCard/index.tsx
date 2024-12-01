import { Trash } from "@phosphor-icons/react";
import { InputQuantity } from "../../../../components/inputQuantity";
import { ActionsContainer, CoffeeCartCardContainer, RemoveButton } from "./styles";
import { CartItem } from "../../../../contexts/CartContext";
import { formatMoney } from "../../../../utils/formatedMoney";
import { useCart } from "../../../../hooks/useCart";

interface CoffeeCartCardProps {
  coffee: CartItem
}

export function CoffeeCartCard ({ coffee }: CoffeeCartCardProps){
  const {changeCartitemQuantity, removeCartItem} = useCart()

  function handleIclease() {
    changeCartitemQuantity(coffee.id,'increase')
  }

  function handleDecrease() {
    changeCartitemQuantity(coffee.id,'decrease')
  }

  function handleRemove(){
    removeCartItem(coffee.id)
  }

  const coffeeTotal = coffee.price * coffee.quantity

  const formattedPrice = formatMoney( coffeeTotal)

  return (
    <CoffeeCartCardContainer>
      <div>
        <img src={`/coffeesImg/${coffee.photo}`} alt="" />
        <div>
          <h3>{coffee.name}</h3>
          <ActionsContainer>
            <InputQuantity 
              size='small' 
              quantity={coffee.quantity}
              onDecrease={handleDecrease}
              onIncrease={handleIclease}
            />
            <RemoveButton onClick={handleRemove}>
              { <Trash size={16}/> }
              REMOVER
            </RemoveButton>
          </ActionsContainer>
        </div>
      </div>

      <p>{formattedPrice}</p>
    </CoffeeCartCardContainer>
  )
}