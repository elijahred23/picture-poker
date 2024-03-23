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

    console.log({suitCount, matchingSuits})
    const hasPair = matchingSuits?.length > 0;
    if(!hasPair) return 0;

    for (let pictureType of pictureTypes) {
        let currentSuitCount = suitCount[pictureType];
        if(currentSuitCount === undefined) continue;
        let rank = getRank(pictureType);
        if (currentSuitCount) {
            if(currentSuitCount === numMatches){
                points += currentSuitCount * (rank * 100); 
            }  
            else {
                points += (rank * 10); 
            }
        }
    }

    return points;
}


const winningHands = {
    winningHandsList: ["nothing", "pair", "two pair", "three of a kind", "four of a kind", "full house", "five of a kind"],
    "nothing": {
        value: 0,
        isHand(cards){
            let points = 0;
            for(let pictureType of cards){
                let rank = getRank(pictureType);
                points += rank * 10; 
            }
            return points;
        }
    },
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
                    if(currentSuitCount === 2){
                        points += currentSuitCount * (rank * 100); 
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
        
            if(!hasFullHouse) return 0;

            for (let pictureType of pictureTypes) {
                let currentSuitCount = suitCount[pictureType];
                let rank = getRank(pictureType);
                if (currentSuitCount) {
                    if(currentSuitCount === 2){
                        points += currentSuitCount * (rank * 100); 
                    }  
                    else if(currentSuitCount === 3){
                        points += currentSuitCount * (rank * 200); 
                    }  
                    else {
                        points += (rank * 10); 
                    }
                }
            }
        
            return points;
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
            console.log({message: "GOT HERE"})
            return numMatchesPoints(cards, 5);
        },
    },
    determineHand(cards){
        for(let i = (this.winningHandsList.length - 1); i >= 0; i--){
            let hand = this.winningHandsList[i];
            console.log({hand, handObject: this[hand]})
            let points = this[hand].isHand(cards);
            if(points > 0){
                return {
                    points,
                    hand,
                    value: this[hand].value
                }
            }
        }      
    },
    determineWinner(playerHand, opponentHand){
        let playerDeterminedHand = this.determineHand(playerHand);
        let opponentDeterminedHand = this.determineHand(opponentHand);
        const player = "player";
        const opponent = "opponent";
        const tie = "tie";
        let winner = "";
        let message = "";
        let winningHand;
        console.log({playerDeterminedHand, opponentDeterminedHand})

        if(playerDeterminedHand?.value > opponentDeterminedHand?.value || playerDeterminedHand?.points > opponentDeterminedHand?.points){
            winner = player;
            winningHand = this.winningHandsList[playerDeterminedHand?.value];
            message = `${player} won with a ${winningHand}`; 
        }
        else if(playerDeterminedHand?.value < opponentDeterminedHand?.value || playerDeterminedHand?.points < opponentDeterminedHand?.points){
            winner = opponent;
            winningHand = this.winningHandsList[opponentDeterminedHand?.value];
            message = `${opponent} won with a ${winningHand}`; 
        } 
        else {
            winner = tie 
            winningHand = this.winningHandsList[playerDeterminedHand?.value];
            message = `Both players win with a ${winningHand}`; 
        }


        return {
            winner,
            message,
            playerDeterminedHand,
            opponentDeterminedHand
        }
    }

}


export {
    winningHands
};