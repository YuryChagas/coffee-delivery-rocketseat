import { Button } from "../../../../components/Button";
import { useCart } from "../../../../hooks/useCart";
import { formatMoney } from "../../../../utils/formatedMoney";
import { ConfirmationSectionContainer } from "./styles";

const DELIVERY_PRICE = 3.5;
export function ConfirmationSection() {
  const {cartItemsTotal, cartQuantity} = useCart()
  const cartTotal = DELIVERY_PRICE + cartItemsTotal

  const formattedItemsTotal = formatMoney(cartItemsTotal)
  const formattedCarTotal = formatMoney(cartTotal);
  const formatDeliveryPrice = formatMoney(DELIVERY_PRICE)

  return (
    <ConfirmationSectionContainer>
      <div>
        <p>Total de itens</p>
        <span>R$ {formattedItemsTotal}</span>
      </div>
      <div>
        <p>Entrega</p>
        <span>R$ {formatDeliveryPrice}</span>
      </div>
      <div>
        <h3>Total</h3>
        <h3>R$ {formattedCarTotal}</h3>
      </div>

      <Button text="Confirmar pedido" disabled={cartQuantity <= 0} type="submit"/>
    </ConfirmationSectionContainer>
  )
}