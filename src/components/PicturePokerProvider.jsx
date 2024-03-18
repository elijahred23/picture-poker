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

const initialState = {
    playerHand: playerHand,
    opponentHand: opponentHand,
    currentWinner: "",
}

let hand = winningHands.determineHand(initialState.playerHand);
console.log({hand})


const ActionTypes = {
    SET_PLAYER_HAND: "SET_PLAYER_HAND",
    SET_OPPONENT_HAND: "SET_OPPONENT_HAND",
    SET_RANDOM_PLAYER_HAND: "SET_RANDOM_PLAYER_HAND",
    SET_RANDOM_OPPONENT_HAND: "SET_RANDOM_OPPONENT_HAND",
    SET_CURRENT_WINNER: "SET_CURRENT_WINNER"
}

const PicturePokerReducer = (state, action) => {
    switch(action.type){
        case ActionTypes.SET_PLAYER_HAND: 
            return {
                ...state,
                playerHand: state.playerHand
            }
        case ActionTypes.SET_OPPONENT_HAND: 
            return {
                ...state,
                opponentHand: state.opponentHand
            }
        case ActionTypes.SET_RANDOM_PLAYER_HAND: 
            let randomPlayerHand = card.getRandomHand(); 

            return {
                ...state,
                playerHand: randomPlayerHand
            }
        case ActionTypes.SET_RANDOM_OPPONENT_HAND: 
            let randomOpponentHand = card.getRandomHand(); 

            return {
                ...state,
                opponentHand: randomOpponentHand 
            }
        case ActionTypes.SET_CURRENT_WINNER: 
            return {
                ...state,
                currentWinner: action.payload 
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