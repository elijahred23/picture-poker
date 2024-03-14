import { usePicturePokerContext } from "./PicturePokerProvider"
import Hand from "./Hand";
import { useEffect, useState } from "react";
import { card } from "../utils/card";

export default function PlayerHand(){
    const {PicturePokerState} = usePicturePokerContext();
    const [playerHand, setPlayerHand] = useState([]);

    useEffect(()=>{
        let newHand = PicturePokerState.playerHand.map(playerCard=>{
            const newCard = new card(playerCard)
            return newCard;
        })
        setPlayerHand(newHand)
    }, [PicturePokerState.playerHand])

    return (<>
        <Hand cards={playerHand} />
    </>)
}