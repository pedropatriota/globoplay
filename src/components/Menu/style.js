import styled from 'styled-components'

export const MenuWrapper= styled.div`
  width: 5vw;
  height: 100vh;
  background: #000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  align-items: center;
  padding: 20px;
  transition: width 1s;
  &:focus{
    width:30vw;
    align-items: flex-start; 
    z-index:999;   
  }   
  button{
    background: transparent;
    border: none;
    margin-bottom: 40px;
    color:#fff;
    font-size: 13px;
    svg{
      width: 20px;
      fill: #fff;
      margin-right: 5px;       
    }
  }  
`;