import { HomeIntroContainer, IntroContent, IntroItensContainer } from "./styles";
import IntroCoffee from '../../../../assets/intro-coffee.png'
import { ShoppingCart, Package, Timer, Coffee } from '@phosphor-icons/react'
import { InfoWithIcon } from "../../../../components/infoWithIcon";
import { useTheme } from "styled-components";

export function HomeIntro (){
  const {colors} = useTheme()

  return (
    <HomeIntroContainer>
      <IntroContent className="container">
        <section>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <h3>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</h3>
          <IntroItensContainer>
            <InfoWithIcon
              icon={<ShoppingCart weight="fill"/>}  
              text='Compra simples e segura'
              iconBg={colors['yellow-dark']}
            />
            <InfoWithIcon
              icon={<Package weight="fill"/>}  
              text='Embalagem mantém o café intacto'
              iconBg={colors['base-text']}
            />
            <InfoWithIcon
              icon={<Timer weight="fill"/>}  
              text='Entrega rápida e rastreada'
              iconBg={colors['yellow']}
            />
            <InfoWithIcon
              icon={<Coffee weight="fill"/>}  
              text='O café chega fresquinho até você'
              iconBg={colors['purple']}
            />
          </IntroItensContainer>
        </section>
        <img src={IntroCoffee}/>
      </IntroContent>
    </HomeIntroContainer>
  )
}