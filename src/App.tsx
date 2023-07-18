import React from 'react';
import styled from 'styled-components';
import {Title} from './components/Title';
import {Flex} from './components/Flex';
import {Console} from './components/Console';

const AppWrapper = styled.div`
  width: 100%;
  height: 100vh;
  padding: 2rem;
  background: black;
  color: green;
`

function App() {
    return (
        <AppWrapper>
            <Flex justify={'center '}>
                <Title color={'green'}>
                    Console smd 2023. Ivanov Alex.
                </Title>
            </Flex>
            <Console color='green'/>
        </AppWrapper>
    );
}

export default App;
