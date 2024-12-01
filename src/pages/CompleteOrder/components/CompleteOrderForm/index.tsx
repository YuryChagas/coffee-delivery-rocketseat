import { CurrencyDollar, MapPinLine } from "@phosphor-icons/react";
import { FormSectionContainer } from "../../styles";
import { SectionTitle } from "../SectionTitle";
import { CompleteOrderFormContainer } from "./styles";
import { useTheme } from "styled-components";
import { AddressForm } from "./AddressForm";
import { PaymentMethodOptions } from "./PaymentMethosOptions";

export function CompleteOrderForm(){
  const { colors } = useTheme();

  return (
    <CompleteOrderFormContainer>
          <h2>Complete seu pedido</h2>
          <FormSectionContainer>
            <SectionTitle
              title="Endereço de entrega"
              subtitle="Informe o endereço onde deseja receber seu pedido"
              icon={<MapPinLine color={colors["yellow-dark"]} size={22}/>}
            />

            <AddressForm/>
          </FormSectionContainer>

          <FormSectionContainer>
            <SectionTitle
              title="Pagamento"
              subtitle="O pagamento é feito na entrega. Escolha a forma que deseja pagar"
              icon={<CurrencyDollar color={colors["purple"]} size={22}/>}
            />
            <PaymentMethodOptions/>
          </FormSectionContainer>
    </CompleteOrderFormContainer>
  )
}