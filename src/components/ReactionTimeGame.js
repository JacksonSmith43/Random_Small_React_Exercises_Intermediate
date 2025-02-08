import { useState } from 'react';
import styled from 'styled-components'

const ReactionTimeGame = () => {
    const [showRedButton, setShowRedButton] = useState(false);
    const [showGreenButton, setShowGreenButton] = useState(false);
    const [showStartButton, setShowStartButton] = useState(true);
    const [showTime, setShowTime] = useState(true);

    function handleStartGame() {
        console.log("Game started.");
        setShowRedButton(true);
        setShowStartButton(false);
        setShowTime(false);

        setTimeout(() => {
            setShowGreenButton(true);
            setShowRedButton(false);
        }, 3000)
    }

    function handleRedButtonClick() {
        console.log("Red button pressed.");

        setShowRedButton(false);
        setShowGreenButton(false);
        setShowStartButton(true);
        setShowTime(true);
    }

    function handleGreenButtonClick() {
        console.log("Green button pressed.");
        setShowTime(true);
    }

    function handleTimeElapse() {

    }

    return (
        <ReactionTimeGameContainer
            className='container-fluid'
            aria-label='Press the green button as fast as it appears on the screen.'>

            <h3 tabIndex={0}>Reaction time game:</h3>

            <StartButton
                onClick={handleStartGame}
                className={`btn btn-primary start-button ${showStartButton ? "visible" : "hidden"}`}
                tabIndex={0}>
                Start Game
            </StartButton>

            <RedButton
                onClick={handleRedButtonClick}
                className={`btn btn-danger red-button ${showRedButton ? "visible" : "hidden"}`}
                aria-label='Red button'>
            </RedButton>

            <GreenButton
                onClick={handleGreenButtonClick}
                className={`btn btn-success green-button ${showGreenButton ? "visible" : "hidden"}`}
                aria-label='Green button.'>
            </GreenButton>

            <Time
                tabIndex={0}
                className={`time ${showGreenButton ? "visible" : "hidden"}`}>
                Time taken in ms: ${showTime}
            </Time>

        </ReactionTimeGameContainer>
    );
}

const ReactionTimeGameContainer = styled.div`
    outline: 0.5rem solid red;
    display: inline-block;
    text-align: center;

    width: ${({ theme }) => theme.cardSize.width.large};
    height: ${({ theme }) => theme.cardSize.height.large};
    margin: ${({ theme }) => theme.spacing.medium};
    padding: ${({ theme }) => theme.spacing.medium};

   /* @media only screen and (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        background-color: red;
    }

    @media only screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
        background-color: green;
    }
    @media only screen and (min-width: ${({ theme }) => theme.breakpoints.laptop}) {
        background-color: orange;
    }
    @media only screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
        background-color: blue;
    }*/

`

const StartButton = styled.button`

`

const RedButton = styled.button`
    width: ${({ theme }) => theme.buttonSize.width.small};
    height: ${({ theme }) => theme.buttonSize.height.small}
`

const GreenButton = styled.button`
    width: ${({ theme }) => theme.buttonSize.width.small};
    height: ${({ theme }) => theme.buttonSize.height.small}
`

const Time = styled.p`
    font-weight: bold;
`



export default ReactionTimeGame;