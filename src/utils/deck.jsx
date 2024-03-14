import { pictureTypes } from "./pictureTypes";
import { card } from "./card";

class deck{
    constructor(){
        this.fill();
    }
    setCards(newCards){
        this.cards = newCards;
    }
    appendToCards(newCard){
        this.cards.push(newCard);
    }
    fill(){
        this.setCards([]);
        for(let type of pictureTypes){
            for(let i = 0; i < 5; i++){
                let newCard = new card(type);
                this.appendToCards(newCard);
            }
        }        
    }
}

export {deck}




