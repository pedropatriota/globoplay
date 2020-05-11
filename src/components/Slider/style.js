import styled from 'styled-components'

export const SliderWrapper = styled.section`
  position: absolute;
  top: 71%;
  left: 7vw;
  width: 90vw;
  height: 160px;
  display: flex;
  &:focus{
    position: absolute;
    top:50%
  }
`;

export const CardWrapper = styled.div`
  position: relative;
  max-width: 200px;
  flex-grow: 1;
  height: 100%;
  margin-right: 10px;
  opacity: 0.7;
  background: url('${props=>props.url}') no-repeat center;
  background-size: cover;
  padding: 10px
`;

export const DescWrapper = styled.div`
  color: #ccc;
  display: flex;
  font-size: 13px;
  flex-direction: column;
  height: 100%;
  justify-content: flex-end;
  align-items: flex-start;
  p:last-child{
    font-weight: 700;
    color:#fff;
    font-size: 15px; 
  }
`;