import React from 'react';
import styled from 'styled-components';
import {Title} from './components/Title';

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
            <Title color={'green'}>
                It's my application. Console.log('Hello')
            </Title>
        </AppWrapper>
    );
}

export default App;
