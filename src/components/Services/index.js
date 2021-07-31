import React from 'react'
import Icon1 from '../../images/svg-1.svg'
import Icon2 from '../../images/svg-2.svg'
import Icon3 from '../../images/fernando.png'
import { ServicesContainer, ServicesH1, ServicesWrapper,
         ServicesCard, ServicesIcon, ServicesH2, ServicesP } from './ServicesElements'

const Services = () => {
    return (
        <ServicesContainer id = "servicios">
            <ServicesH1>Nuestros Servicios</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1}/>
                    <ServicesH2>Reduce expense</ServicesH2>
                    <ServicesP> Le ayudamos a reducir gastos </ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon2}/>
                    <ServicesH2>Oficinas Virtuales</ServicesH2>
                    <ServicesP> Le ayudamos a reducir gastos </ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon3}/>
                    <ServicesH2>Grandes Beneficios</ServicesH2>
                    <ServicesP> Le ayudamos a reducir gastos </ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
            
  
    )
}

export default Services
