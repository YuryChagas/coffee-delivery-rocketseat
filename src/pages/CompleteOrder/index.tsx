import { CompleteOrderForm } from "./components/CompleteOrderForm";
import { SelectedCoffees } from "./components/SelectedCoffees";
import { CompleteOrderContainer } from "./styles";
import * as zod from 'zod';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, FormProvider} from 'react-hook-form';
import { useNavigate } from "react-router-dom";
import { useCart } from "../../hooks/useCart";

enum  PaymentMethods {
  credit = "credit",
  debit= "debit",
  money = "money",
}

const confirmOrderFormValidationSchema = zod.object({
  cep: zod.string().min(1, 'informe o CEP'),
  street: zod.string().min(1, 'informe a RUA'),
  number: zod.string().min(1, 'informe o NÚMERO'),
  complement: zod.string(),
  district: zod.string().min(1, 'informe o BAIRRO'),
  city: zod.string().min(1, 'informe a CIDADE'),
  uf: zod.string().min(1, 'informe a UF'),
  paymentMethod: zod.nativeEnum(PaymentMethods, {
    errorMap:() => {
      return { message: "Informe o método de pagamento"}
    }
  })
})

export type orderData = zod.infer<typeof confirmOrderFormValidationSchema>
;
type confirmeOrderFormData = orderData;

export function CompleteOrderPage() {
  const confirmOrderForm = useForm<confirmeOrderFormData>({
    resolver: zodResolver(confirmOrderFormValidationSchema)
  });
  
  const { handleSubmit } = confirmOrderForm;

  const navigate = useNavigate()

  const { clearCart } = useCart()

  function handleConfirmOrder (data: confirmeOrderFormData){
    navigate("/OrderConfirmed", {
      state: data
    })
    clearCart();
  }
  return (
    <FormProvider {...confirmOrderForm}>
      <CompleteOrderContainer className="container" onSubmit={handleSubmit(handleConfirmOrder)}>
        <CompleteOrderForm/>
        <SelectedCoffees/>
      </CompleteOrderContainer>
    </FormProvider>
   
  )
}