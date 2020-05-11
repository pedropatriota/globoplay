import React, { useEffect, useState, useRef, useCallback} from 'react'
import { Play } from '@styled-icons/boxicons-regular/Play'
import Menu from '../../components/Menu'
import Description from '../../components/Description'
import Button from '../../components/Button'
import Cards from '../../components/Slider'
import Feature from '../../components/Feature'
import * as S from './style'

export default ()=>{
  const[highlight, setHighlight]= useState(true)

  const menuRef = useRef(null);
  const buttonLeft = useRef(null)
  const buttonRight = useRef(null) 
  const cardRef = useRef(null)
  
  useEffect(()=>{
    buttonLeft.current.focus()
  }, [])

  const[focus, setFocus]= useState(false)
  
  const handleKeyDown = useCallback(
    e=>{
    if(document.activeElement === buttonLeft.current){
      if (e.keyCode === 37) {        
        e.preventDefault();        
        menuRef.current.focus()
        setFocus(true)
      }
      else if (e.keyCode === 39) {        
        e.preventDefault();        
        buttonRight.current.focus()        
      }
      else if (e.keyCode === 40) {        
        e.preventDefault();        
        cardRef.current.focus() 
        setHighlight(false)       
      }
    }
    else if(document.activeElement === menuRef.current){
      if (e.keyCode === 39) {        
        e.preventDefault();        
        buttonLeft.current.focus()
        setFocus(false)
      }      
    }
    else if(document.activeElement === buttonRight.current){
      if (e.keyCode === 37) {        
        e.preventDefault();        
        buttonLeft.current.focus()        
      }
      else if (e.keyCode === 40) {        
        e.preventDefault();        
        cardRef.current.focus() 
        setHighlight(false)       
      }     
    } 
    else if(document.activeElement === cardRef.current){
      if (e.keyCode === 37) {        
        e.preventDefault();        
        menuRef.current.focus()
        setHighlight(true)       
      }
      else if (e.keyCode === 38) {        
        e.preventDefault(); 
        setHighlight(true)        
        buttonLeft.current.focus()                               
      }     
    }
  },
    [menuRef, buttonLeft, buttonRight, cardRef, setFocus, setHighlight]                
  )   

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown, false);
    return () => {
      document.removeEventListener("keydown", handleKeyDown, false);
    };
  }, [handleKeyDown]);

  
  return(
    <S.Wrapper>
      <Menu ref={menuRef} focus={focus}/>
      <Feature>(
        {highlight &&
          <>
            <Description />
            <Button>
              <S.Button ref={buttonLeft}>
                <Play /> 
                <span>Assista</span>
              </S.Button>
              <S.Button ref={buttonRight}> 
                <span>Veja mais</span>
              </S.Button>
            </Button>
          </>  
        }             
        <Cards ref={cardRef}/>
      </Feature>
    </S.Wrapper>
  )
}