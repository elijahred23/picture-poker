import {useReducer, useContext, createContext} from 'react';

const PicturePokerContext = createContext();

const usePicturePokerContext = () => {
    let context = useContext(PicturePokerContext);

    return context;
}

const initialState = {
    gameDeck: null,
    playerHand: ["cpp","cpp","cpp","cpp","cpp"],
}

const ActionTypes = {
    SET_GAME_DECK: "SET_GAME_DECK",
    SET_PLAYER_HAND: "SET_PLAYER_HAND",
}

const PicturePokerReducer = (state, action) => {
    switch(action.type){
        case ActionTypes.SET_GAME_DECK: 
            return {
                state,
                gameDeck: state.gameDeck
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