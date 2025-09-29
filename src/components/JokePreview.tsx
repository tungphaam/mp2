import React from 'react';
import styled from 'styled-components';
import type { Joke } from '../interfaces/types';

interface Props {
    joke: Joke;
}

const Card = styled.div`
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 16px;
    margin: 8px 0;
    background-color: #f9f9f9;
`;

const JokePreview: React.FC<Props> = ({ joke }) => {
    return (
        <Card>
            <h2>{joke.setup}</h2>
            <p>{joke.punchline}</p>
            <small>Type: {joke.type}</small>
        </Card>
    );
};

export default JokePreview;
