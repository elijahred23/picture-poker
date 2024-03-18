import { winningHands } from "../utils/winningHands";
import { useEffect } from "react";
import { ActionTypes, usePicturePokerContext } from "./PicturePokerProvider"

export default function PicturePokerMenu() {
    const { PicturePokerState, PicturePokerDispatch } = usePicturePokerContext();


    const whoWon = () => {
        let { winner, playerDeterminedHand, opponentDeterminedHand } = winningHands.determineWinner(PicturePokerState.playerHand, PicturePokerState.opponentHand);
        winner = winner.replace(/\b\w/, char => char.toUpperCase());
        PicturePokerDispatch({ type: ActionTypes.SET_PLAYER_DETERMINED_HAND, payload: playerDeterminedHand })
        PicturePokerDispatch({ type: ActionTypes.SET_OPPONENT_DETERMINED_HAND, payload: opponentDeterminedHand })
        PicturePokerDispatch({ type: ActionTypes.SET_CURRENT_WINNER, payload: winner })
    }

    const dealNewHands = () => {
        PicturePokerDispatch({ type: ActionTypes.SET_RANDOM_PLAYER_HAND })
        PicturePokerDispatch({ type: ActionTypes.SET_RANDOM_OPPONENT_HAND })
        PicturePokerDispatch({ type: ActionTypes.SET_OPPONENT_HAND_SHOWING, payload: false })
    }

    const showOpponentHand = () => {
        PicturePokerDispatch({ type: ActionTypes.SET_OPPONENT_HAND_SHOWING, payload: true })
    }
    const hideOpponentHand = () => {
        PicturePokerDispatch({ type: ActionTypes.SET_OPPONENT_HAND_SHOWING, payload: false })
    }

    useEffect(() => {
        whoWon();
    }, [PicturePokerState.playerHand, PicturePokerState.opponentHand])

    return (<>
        <h1>Picture Poker</h1>
        <button onClick={dealNewHands}>Deal</button>
        <button onClick={() => PicturePokerState.opponentHandShowing ? hideOpponentHand() : showOpponentHand()}>{PicturePokerState.opponentHandShowing ? "Hide" : "Show"}</button>
        {PicturePokerState.opponentHandShowing ?
            <>
                <p>WINNER: {PicturePokerState.currentWinner}</p>
            </> : <>
            <div style={{margin:"50px"}}></div>
            </>}
    </>)
}