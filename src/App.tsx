// import { useState } from 'react'
import JokesList from './components/JokesList';
import styled from 'styled-components';

const AppContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    text-align: center;
    background-color: #f0f0f0;
    padding: 20px;
`

function App() {
    return (
        <AppContainer>
            <h1>Random Joke Generator</h1>
            <JokesList />
        </AppContainer>
    );
}

export default App;
