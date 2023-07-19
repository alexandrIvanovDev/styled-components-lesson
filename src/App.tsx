import React from 'react';
import styled from 'styled-components';
import {Title} from './components/Title';
import {Flex} from './components/Flex';
import {Console} from './components/Console';
import {Button} from './components/Button';

const AppWrapper = styled.div`
  width: 100%;
  height: 100vh;
  padding: 4rem;
  background: black;
  color: green;
`

function App() {
    return (
        <AppWrapper>
            <Flex justify={'center '}>
                <Title>
                    Console smd 2023. Ivanov Alex.
                </Title>
            </Flex>
            <Flex direction='column' margin='10px 0'>
                <Console/>
                <Button align='flex-end' outlined color='green' background='white'>Отправить</Button>
            </Flex>
        </AppWrapper>
    );
}

export default App;
