import { usePicturePokerContext } from "./PicturePokerProvider"
import Hand from "./Hand";
import { useEffect, useState } from "react";
import { card } from "../utils/card";
import { getRank } from "../utils/pictureTypes"; 

export default function OpponentHand(){
    const {PicturePokerState} = usePicturePokerContext();
    const [playerHand, setPlayerHand] = useState([]);
    const [handRank, setHandRank] = useState('');

    useEffect(()=>{
        let newHand = PicturePokerState.opponentHand.map(playerCard=>{
            const newCard = new card(playerCard)
            return newCard;
        })
        setPlayerHand(newHand)
    }, [PicturePokerState.playerHand])

    return (<>
        <p>Opponent Hand:</p>
        <Hand cards={playerHand} />
    </>)
}