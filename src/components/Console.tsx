import {FC} from 'react';
import styled from 'styled-components';

type PropsType = {
    color?: string
}

const StyledConsole = styled.textarea`
  width: 100%;
  height: 70vh;
  background: black;
  color: ${({color}) => color || 'white'};
  font-size: 22px;
  border: none;
  resize: none;
  &:focus {
    outline: none;
  }
`

export const Console: FC<PropsType> = (props) => {
    return <StyledConsole {...props}/>
}