import styled, {css, keyframes} from 'styled-components';
import {FC} from 'react';

type PropsType = {
    children: string
    align?: string
    primary?: boolean
    color?: string
    background?: string
    outlined?: boolean
}

const rotateAnimation = keyframes`
  0% {
    transform: rotateZ(0deg);
  }
  100% {
    transform: rotateZ(360deg);
  }
`


const StyledButton = styled.button<PropsType>`
  padding: 10px 15px;
  border: none;
  cursor: pointer;
  font-size: 20px;
  align-self: ${props => props.align || 'stretch'};
  &:focus {
    outline: none;
  }
  &:hover {
    animation: ${rotateAnimation} 1s;
  }
  ${props => props.primary && css`
    color: ${props => props.color || 'white'};
    background: ${props => props.background || 'black'};
  `}
  ${props => props.outlined && css`
    color: ${props => props.color || 'white'};
    border: 1px solid ${props => props.color || 'white'};
    background: transparent;
  `}
`

const LargeButton = styled(StyledButton)`
  font-size: 30px;
`

export const Button: FC<PropsType> = (props) => {
    return <LargeButton {...props}/>
}