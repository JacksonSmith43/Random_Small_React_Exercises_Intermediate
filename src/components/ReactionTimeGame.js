import { useRef, useState } from 'react';
import styled from 'styled-components'
import { useEffect } from 'react';

const ReactionTimeGame = () => {
    const [showRedButton, setShowRedButton] = useState(false);
    const [showGreenButton, setShowGreenButton] = useState(false);
    const [showStartButton, setShowStartButton] = useState(true);
    const [showTime, setShowTime] = useState(true);

    const [isRunning, setIsRunning] = useState(false);
    const [time, setTime] = useState(0);

    const [redButtonPressed, setRedButtonPressed] = useState(false);
    const [greenButtonPressed, setGreenButtonPressed] = useState(false);

    const message = useRef();
    const timeoutID = useRef(null);

    const minutes = Math.floor((time % 360000) / 6000);
    const seconds = Math.floor((time % 6000) / 100);
    const milliseconds = time % 100;

    useEffect(() => {
        let intervalId;
        if (isRunning) {
            intervalId = setInterval(() => {
                setTime(prevTime => prevTime + 1);
            }, 10);
        }
        return () => clearInterval(intervalId);
    }, [isRunning]);


    useEffect(() => {
        if (showRedButton) {
            setRedButtonPressed(true);
            setGreenButtonPressed(false);

        } else if (showGreenButton) {
            setGreenButtonPressed(true);
            setRedButtonPressed(false);
        }

    }, [showRedButton, showGreenButton]);


    function handleStartGame() {
        console.log("Game started.");
        setShowRedButton(true);
        setShowGreenButton(false);
        setShowStartButton(false);
        setShowTime(false);
        setTime(0);
        message.current = "";

        clearTimeout(timeoutID.current);

        timeoutID.current = setTimeout(() => {
            if (!greenButtonPressed && !redButtonPressed) {
                setShowRedButton(false);
                setShowGreenButton(true);
                setShowStartButton(false);
                setShowTime(false);
                setIsRunning(true);
            }
        }, 1000);

    }

    function handleRedButtonClick() {
        console.log("Red button pressed.");

        clearTimeout(timeoutID.current);

        if (redButtonPressed) {
            setRedButtonPressed(false);
            setShowRedButton(false);
            setShowGreenButton(false);
            setShowStartButton(true);
            setShowTime(false);
            setIsRunning(false);

            message.current = "Too early."
        }
    }

    function handleGreenButtonClick() {

        console.log("Green button pressed.");
        setShowTime(true);
        setShowGreenButton(false);
        setShowRedButton(false);
        setShowStartButton(true);
        setIsRunning(false);

        if (greenButtonPressed) {
            setGreenButtonPressed(false);

            message.current = `Time taken in ms: 
                                ${minutes.toString().padStart(2, "0")}:
                                ${seconds.toString().padStart(2, "0")}:
                                ${milliseconds.toString().padStart(2, "0")}`;
        }
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
                aria-label='Red button'
            >
            </RedButton>

            <GreenButton
                onClick={handleGreenButtonClick}
                className={`btn btn-success green-button ${showGreenButton ? "visible" : "hidden"}`}
                aria-label='Green button.'>
            </GreenButton>

            <Time
                tabIndex={0}
                className={`time ${showGreenButton ? "visible" : "hidden"}`}>

                {minutes.toString().padStart(2, "0")}:
                {seconds.toString().padStart(2, "0")}:
                {milliseconds.toString().padStart(2, "0")}

            </Time>

            <Message tabIndex={0}>
                {message.current}
            </Message>


        </ReactionTimeGameContainer >
    );
}

const ReactionTimeGameContainer = styled.div`
    outline: 0.5rem solid red;
    display: inline-block;
    text-align: center;
    max-width: 50%; 
    max-height: 30%;

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

const Message = styled.p`
    font-weight: bold;
    margin: ${({ theme }) => theme.spacing.medium}
`


export default ReactionTimeGame;