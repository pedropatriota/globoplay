import React from 'react'
import cardData from './content'
import * as S from './style';

export default React.forwardRef((props, ref)=>{
  const cards = cardData();
  
  // utilizar nesse componente o useFocus
  
  return (
    <S.SliderWrapper tabIndex="-1" ref={ref}>
    {cards.map(card => {
      return (
        <S.CardWrapper  id={card.id} key={card.id} url={card.url}>         
          <S.DescWrapper>
            <p>{card.category}</p>          
            <p>{card.desc}</p>
          </S.DescWrapper>          
        </S.CardWrapper>
      )
    })}
    </S.SliderWrapper>
  )
})