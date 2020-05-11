import React from 'react'
import * as S from './style'

export default (props)=>{  

  return(
    <S.ButtonWrapper>
      {props.children}
    </S.ButtonWrapper>  
  )
}