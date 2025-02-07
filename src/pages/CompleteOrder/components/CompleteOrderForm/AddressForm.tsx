import { useFormContext } from "react-hook-form";
import { Input } from "../../../../components/input";
import { AddressFormContainer } from "./styles";

interface ErrorsType {
  errors: {
    [key: string]: {
      message: string;
    }
  }
}
export function AddressForm (){
  const { register, formState } = useFormContext();

  const { errors } = formState as unknown as ErrorsType;
  return (
    <AddressFormContainer>
      <Input placeholder="CEP"
        type="number"
        className="cep"
        {...register("cep")}
        error={errors.cep?.message}
      />
      <Input placeholder="RUA"
        className="street" 
        {...register("street")}
        error={errors.street?.message}
      />
      <Input placeholder="NÚMERO"
        type="number" 
        {...register("number")}
        error={errors.number?.message}
      />
      <Input placeholder="COMPLEMENTO"
       className="complement"
       {...register("complement")}
       error={errors.complement?.message}
       rightText="Opcional"
      />
      <Input placeholder="BAIRRO"
      {...register("district")}
      error={errors.district?.message}
      />
      <Input placeholder="CIDADE"
      {...register("city")}
      error={errors.city?.message}
      />
      <Input placeholder="UF"
      {...register("uf")}
      error={errors.uf?.message}
      />
    </AddressFormContainer>
  )
}