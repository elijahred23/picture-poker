import { winningHands } from "../utils/winningHands";
import { ActionTypes, usePicturePokerContext } from "./PicturePokerProvider"

export default function PicturePokerMenu(){
    const {PicturePokerState, PicturePokerDispatch} = usePicturePokerContext();

    
    const whoWon = () => {
        const {winner, playerDeterminedHand, opponentDeterminedHand} = winningHands.determineWinner(PicturePokerState.playerHand,PicturePokerState.opponentHand) ;
        console.log({winner, playerDeterminedHand, opponentDeterminedHand})
        PicturePokerDispatch({type: ActionTypes.SET_CURRENT_WINNER, payload: winner})
    }

    const dealNewHands = () => {
        PicturePokerDispatch({type: ActionTypes.SET_RANDOM_PLAYER_HAND})
        PicturePokerDispatch({type: ActionTypes.SET_RANDOM_OPPONENT_HAND})
    }

    return (<>
    <h1>Picture Poker</h1> 
    <button onClick={whoWon}>Who won?</button>
    <button onClick={dealNewHands}>Deal</button>
    <p>WINNER: {PicturePokerState.currentWinner}</p>
    </>)
}