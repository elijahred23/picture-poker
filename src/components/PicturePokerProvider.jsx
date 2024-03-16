import {useReducer, useContext, createContext} from 'react';
import { card } from '../utils/card';
import { winningHands } from '../utils/winningHands';

const PicturePokerContext = createContext();

const usePicturePokerContext = () => {
    let context = useContext(PicturePokerContext);

    return context;
}

const initialState = {
    playerHand: card.getRandomHand(),
}

let hand = winningHands.determineHand(initialState.playerHand);
console.log({hand})


const ActionTypes = {
    SET_PLAYER_HAND: "SET_PLAYER_HAND",
}

const PicturePokerReducer = (state, action) => {
    switch(action.type){
        case ActionTypes.SET_PLAYER_HAND: 
            return {
                state,
                playerHand: state.playerHand
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