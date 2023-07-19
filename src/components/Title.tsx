import React, {FC, ReactNode} from 'react';
import styled from 'styled-components';

const StyledTitle = styled.h1`
  color: ${props => props.color || props.theme.colors.primary};
`

type PropsType = {
    children: ReactNode | string
    color?: string
}

export const Title: FC<PropsType> = (props) => {
    return <StyledTitle {...props}/>
}