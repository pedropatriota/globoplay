import React from 'react';
import * as S from './style'
import Logo from '../../assets/image/logo-big-brother-brasil.png'
 
export default ()=>{

  return(    
    <S.DescWrapper>
      <img src={Logo} alt="logo"/>
      <p>
        Acompanhe 24h ao vivo a casa<br/>
        mais vigiada do Brasil
      </p>
    </S.DescWrapper>      
  )
}