import { winningHands } from "../utils/winningHands";
import { usePicturePokerContext } from "./PicturePokerProvider"

export default function PicturePokerMenu(){
    const {PicturePokerState} = usePicturePokerContext();
    
    const whoWon = () => {
        const {winner, playerDeterminedHand, opponentDeterminedHand} = winningHands.determineWinner(PicturePokerState.playerHand,PicturePokerState.opponentHand) ;
        console.log({winner, playerDeterminedHand, opponentDeterminedHand})
    }

    return (<>
    <h1>Picture Poker</h1> 
    <button onClick={whoWon}>Who won?</button>
    </>)
}