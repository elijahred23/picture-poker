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
                points += currentSuitCount[pictureType] * (rank * 100); 
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
        value: 2,
        isHand(cards){
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
        
            matchingSuits = Object.keys(suitCount).filter(suit => suitCount[suit] === 2);
            const hasPair = matchingSuits?.length > 1;
        
            for (let pictureType of pictureTypes) {
                let currentSuitCount = suitCount[pictureType];
                let rank = getRank(pictureType);
                if (currentSuitCount) {
                    if(currentSuitCount[pictureType] === 2){
                        points += currentSuitCount[pictureType] * (rank * 100); 
                    }  
                    else {
                        points += (rank * 10); 
                    }
                }
            }
        
            return hasPair ? points : 0;
        }
    },
    "three of a kind": {
        value: 3,
        isHand(cards){
            return numMatchesPoints(cards, 3);
        }
    },
    "full house": {
        value: 4,
        isHand(cards){
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
        
            let hasFullHouse = false;
            let hasThree = false;
            let hasTwo = false;
            
            matchingSuits = Object.keys(suitCount).filter(suit => {
                if(suitCount[suit] === 2){
                    hasTwo = true;
                }
                else if(suitCount[suit] === 3){
                    hasThree = true;
                }
            });
            hasFullHouse = hasThree && hasTwo; 
        

            for (let pictureType of pictureTypes) {
                let currentSuitCount = suitCount[pictureType];
                let rank = getRank(pictureType);
                if (currentSuitCount) {
                    if(currentSuitCount[pictureType] === 2){
                        points += currentSuitCount[pictureType] * (rank * 100); 
                    }  
                    else if(currentSuitCount[pictureType] === 3){
                        points += currentSuitCount[pictureType] * (rank * 200); 
                    }  
                    else {
                        points += (rank * 10); 
                    }
                }
            }
        
            return hasFullHouse ? points : 0;
        }
    },
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
    winningHandsList: ["five of a kind", "full house", "four of a kind", "three of a kind","two pair", "pair"],
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