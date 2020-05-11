import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
`;

export const Button = styled.button`
  width: 180px;
  height: 55px;
  background: transparent;
  border-radius: 8px;
  border: 2px solid gray;
  color: gray;
  margin-right: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  &:focus{
    background: #fff;
    border:none;
    color: #000;
  }
  
  svg{
    width: 30px
  }
  span{
    font-size: 16px; 
    font-weight: 700;
  }
`;