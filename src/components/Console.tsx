import {FC, useState, KeyboardEvent} from 'react';
import styled from 'styled-components';
import {Flex} from './Flex';
import {Line} from './Line';

type PropsType = {
    color?: string
}

const StyledConsole = styled.textarea`
  width: 100%;
  height: 70vh;
  background: black;
  color: ${props => props.color || props.theme.colors.primary};
  font-size: 22px;
  border: none;
  resize: none;
  &:focus {
    outline: none;
  }
  @media ${props => props.theme.media.phone} {
    border: 1px solid white;
  }
  @media ${props => props.theme.media.tablet} {
    border: 1px solid orange;
  }
`

export const Console: FC<PropsType> = (props) => {

    const [lines, setLines] = useState(['C/user/documents>'])

    const onEnterHandler = (e: KeyboardEvent) => {
        if (e.key === 'Enter') {
            setLines([...lines, 'C/user/documents/'])
        }
    }

    return (
        <Flex>
            <Flex direction='column' margin='0 10px'>
                {lines.map(line =>
                    <Line color={props.color}>{line}</Line>
                )}
            </Flex>
            <StyledConsole {...props} onKeyDown={onEnterHandler}/>
        </Flex>
    )
}