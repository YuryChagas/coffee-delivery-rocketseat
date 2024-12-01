import { OrderConfirmedContainer, OrderDetailsContainer } from "./styles";
import OrderConfirmedIllustration from "../../../src/assets/confirmed-order.svg";
import { InfoWithIcon } from "../../components/infoWithIcon";
import { MapPin, Clock, CurrencyDollar } from "@phosphor-icons/react";
import { useTheme } from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";
import { orderData } from "../CompleteOrder";
import { paymentMethods } from "../CompleteOrder/components/CompleteOrderForm/PaymentMethosOptions";
import { useEffect } from "react";

interface Locationtype {
  state: orderData
}

export function OrderConfirmedPage () {
  const { colors } = useTheme();

  const { state } = useLocation() as unknown as Locationtype

  const navigate = useNavigate()

  useEffect(() => {
    if(!state) {
      navigate("/")
    }
  }, [])

  if(!state) return <></>;

  return (
    <OrderConfirmedContainer className="container">
      <div>
        <h1>Uhu! Pedido confirmado</h1>
        <p>Agora é só aguardar que o café chegará até você</p>
      </div>

      <section>
        <OrderDetailsContainer>
          <InfoWithIcon
            icon= {<MapPin size={20}
            
            weight="fill"/>}
            iconBg={ colors["purple"]}
            text= <p>Entrega em <strong> {state.street}, {state.number} </strong>
                  <br/>              
                  {state.district} - {state.city}, {state.uf}</p>
          />
          <InfoWithIcon
            icon= {<Clock size={20} weight="fill"/>}
            iconBg={ colors["yellow"]}
            text= <p>Previsão de entrega 
            <br/>              
            <strong>20 min - 30 min </strong></p>
          />
          <InfoWithIcon
            icon= {<CurrencyDollar size={20} weight="fill"/>}
            iconBg={ colors["yellow"]}
            text= <p>Pagamento na entrega
                  <br/>              
                  <strong>{paymentMethods[state.paymentMethod].label}</strong></p>
          />
        </OrderDetailsContainer>
        <img src={OrderConfirmedIllustration} />
      </section>
    </OrderConfirmedContainer>
  )
}