import React from 'react';
import * as S from './style'

 
export default (props)=>{
  
  return(
    <S.FeatureWrapper>
      {props.children}
    </S.FeatureWrapper>
  )
}