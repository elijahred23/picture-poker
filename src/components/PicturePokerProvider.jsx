import {useReducer, useContext, createContext} from 'react';
import { card } from '../utils/card';
import { winningHands } from '../utils/winningHands';

const PicturePokerContext = createContext();

const usePicturePokerContext = () => {
    let context = useContext(PicturePokerContext);

    return context;
}

let playerHand = card.getRandomHand();
let opponentHand = card.getRandomHand();

playerHand = ['rust', 'cpp', 'javascript','python', 'csharp'];
opponentHand = ['rust', 'cpp', 'javascript','python', 'php'];

const initialState = {
    playerHand: playerHand,
    opponentHand: opponentHand,
}

let hand = winningHands.determineHand(initialState.playerHand);
console.log({hand})


const ActionTypes = {
    SET_PLAYER_HAND: "SET_PLAYER_HAND",
    SET_OPPONENT_HAND: "SET_OPPONENT_HAND",
}

const PicturePokerReducer = (state, action) => {
    switch(action.type){
        case ActionTypes.SET_PLAYER_HAND: 
            return {
                state,
                playerHand: state.playerHand
            }
        case ActionTypes.SET_OPPONENT_HAND: 
            return {
                state,
                opponentHand: state.opponentHand
            }
    }

    return state;
}

const PicturePokerProvider = ({children}) => {
    const [PicturePokerState, PicturePokerDispatch] = useReducer(PicturePokerReducer, initialState);

    const value = {
        PicturePokerState,
        PicturePokerDispatch
    }
    return (<>
    <PicturePokerContext.Provider value={value}>
        {children}
    </PicturePokerContext.Provider>
    </>)
}

export {
    ActionTypes,
    PicturePokerProvider,
    usePicturePokerContext
}