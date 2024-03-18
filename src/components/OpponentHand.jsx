import { usePicturePokerContext } from "./PicturePokerProvider"
import Hand from "./Hand";
import { useEffect, useState } from "react";
import { card } from "../utils/card";
import { getRank } from "../utils/pictureTypes"; 

export default function OpponentHand(){
    const {PicturePokerState} = usePicturePokerContext();
    const [opponentHand, setOpponentHand] = useState([]);
    const [handRank, setHandRank] = useState('');

    const updateOpponentHand = () => {
        let newHand = PicturePokerState.opponentHand?.map(playerCard=>{
            const newCard = new card(playerCard)
            return newCard;
        })
        setOpponentHand(newHand)
    }

    useEffect(()=>{
        if(PicturePokerState.opponentHandShowing){
            updateOpponentHand();
        }
    }, [PicturePokerState.opponentHand])

    useEffect(()=>{
        if(PicturePokerState.opponentHandShowing){
            updateOpponentHand();
        }
        else {
            let hiddenCards = [];
            for(let i = 0; i < 5; i++){
                let newCard = new card("back_card")
                console.log({newCard})
                hiddenCards.push(newCard)
            }
            setOpponentHand(hiddenCards)
        }
    }, [PicturePokerState.opponentHandShowing])

    return (<>
        <p>Opponent Hand:</p>
        <Hand cards={opponentHand} />
    </>)
}