import React, { useState, useEffect } from 'react';
import { Joke } from '../interfaces/types';
import JokePreview from './JokePreview';
import styled from 'styled-components';

const Button = styled.button`
    margin-top: 20px;
    padding: 10px 16px;
    border: none;
    border-radius: 8px;
    background-color: #4caf50;
    color: white;
    font-size: 16px;
    cursor: pointer;

    &:hover {
        background-color: #45a049;
    }
`;

const JokesList: React.FC = () => {
    const [joke, setJoke] = useState<Joke | null>(null);

    const fetchJoke = async () => {
        try {
            const res = await fetch('https://official-joke-api.appspot.com/random_joke');
            const data: Joke = await res.json();
            setJoke(data);
        } catch (error) {
            console.error('Error fetching joke:', error);
        }
    };

    useEffect(() => {
        fetchJoke();
    }, []);

    return (
        <div>
            {joke ? <JokePreview joke={joke} /> : <p>Loading joke...</p>}
            <Button onClick={fetchJoke}>Random Joke</Button>
        </div>
    );
};
export default JokesList;
