import { Minus, Plus } from "@phosphor-icons/react";
import { IconButtonInput, InputQuantityContainer } from "./styles";

interface InputQuantityProps {
  size?: "medium" | "small";
  quantity: number;
  onIncrease: ()=> void;
  onDecrease: ()=> void;
}

export function InputQuantity ({onIncrease, onDecrease, quantity, size= 'medium'}: InputQuantityProps){
  return (
    <InputQuantityContainer size={size}>
      <IconButtonInput disabled = {quantity <= 1} onClick={onDecrease}>
        <Minus size={14}/>
      </IconButtonInput>
      <input type="number" value={quantity} readOnly />
      <IconButtonInput onClick={onIncrease}>
        <Plus size={14} />
      </IconButtonInput>
    </InputQuantityContainer>
  )
}