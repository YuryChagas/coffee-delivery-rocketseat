import { MapPin, ShoppingCart } from "@phosphor-icons/react";
import { HeaderButtonsContainer, HeaderContainer, HeeaderButton } from "./styles";
import logoCoffee from '../../assets/logoCoffee.svg'
import { NavLink } from "react-router-dom";
import { useCart } from "../../hooks/useCart";

export function Header (){
  const { cartQuantity } = useCart()
  return (
    <HeaderContainer>
      <div className="container">
        <NavLink to='/'>
        <img src={logoCoffee} alt="" />
        </NavLink>
        <HeaderButtonsContainer>
        <HeeaderButton color='purple'>
          <MapPin size={20} weight="fill"/>
          Belém, PA
        </HeeaderButton>

        <NavLink to="/chekout">
        <HeeaderButton color='yellow'>
          {cartQuantity >= 1 && <span>{cartQuantity}</span>}
          <ShoppingCart size={20} weight="fill"/>
        </HeeaderButton>
        </NavLink>
       
        </HeaderButtonsContainer>
      </div>
    </HeaderContainer>
  )
}