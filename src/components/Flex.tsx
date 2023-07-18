import React, {FC, ReactNode} from 'react';
import styled from 'styled-components';

type PropsType = {
    direction?: string
    justify?: string
    align?: string
    margin?: string
    children: ReactNode
}

const StyledFlex = styled.div<PropsType>`
  display: flex;
  flex-direction: ${props => props.direction || 'row'};
  justify-content: ${props => props.justify || 'stretch'};
  align-items: ${props => props.align || 'stretch'};
  margin: ${({margin}) => margin || 0};
`

export const Flex: FC<PropsType> = (props) => {
    return <StyledFlex {...props}/>
}