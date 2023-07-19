import styled from 'styled-components';
import {FC} from 'react';

type PropsType = {
    color?: string
    children: string
}

const StyledLine = styled.div`
  font-size: 22px;
  color: ${props => props.color || props.theme.colors.primary}; 
`

export const Line: FC<PropsType> = (props) => {
    return <StyledLine {...props}/>
}