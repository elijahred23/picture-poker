import { card } from "./card";
import { pictureTypes, getRank } from "./pictureTypes";

const numMatchesPoints = (cards, numMatches)=> {
    let suitCount = {};
    let points = 0;
    let matchingSuits = [];

    for (const pictureType of cards) {
        if (suitCount[pictureType]) {
            suitCount[pictureType]++;
        } else {
            suitCount[pictureType] = 1;
        }
    }

    matchingSuits = Object.keys(suitCount).filter(suit => suitCount[suit] === numMatches);
    const hasPair = matchingSuits?.length > 0;

    for (let pictureType of pictureTypes) {
        let currentSuitCount = suitCount[pictureType];
        let rank = getRank(pictureType);
        if (currentSuitCount) {
            if(currentSuitCount[pictureType] === numMatches){
                points += (rank * 100); 
            }  
            else {
                points += (rank * 10); 
            }
        }
    }

    return hasPair ? points : 0;
}

const winningHands = {
    "pair": {
        value: 1,
        isHand(cards) {
            return numMatchesPoints(cards, 2)
        }
    },
    "two pair": {
        value: 2
    },
    "three of a kind": {
        value: 3,
        isHand(cards){
            return numMatchesPoints(cards, 3);
        }
    },
    "full house": 4,
    "four of a kind": {
        value: 5,
        isHand(cards){
            return numMatchesPoints(cards, 4);
        }
    },
    "five of a kind": {
        value: 6,
        isHand(cards){
            return numMatchesPoints(cards, 5);
        },
    },
    winningHandsList: ["five of a kind", "four of a kind", "three of a kind", "pair"],
    determineHand(cards){
        for(let hand of this.winningHandsList){
            let points = this[hand].isHand(cards);
            if(points){
                return {
                    points,
                    hand,
                    value: this[hand].value
                }
            }
        }      
    }
}


export {
    winningHands
};