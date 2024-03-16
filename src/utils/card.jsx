import { pictureTypes } from "./pictureTypes.jsx";

class card {

    constructor(pictureType) {
        this.showing = true;
        this.setPictureType(pictureType)
    }
    static getCard(){
        let pictureIndexLength = pictureTypes?.length;
        return pictureTypes[Math.floor(Math.random() * pictureIndexLength)];
    }
    setShowing(newShowing){
        this.showing = newShowing;
    }
    setPictureType(newPictureType){
        this.pictureType = newPictureType;
    }
    static getRandomHand(){ 
        let randomHand =[];

        for(let i = 0; i< 5; i++){
            randomHand.push( card.getCard());
        }
        return randomHand;
    }
}

export {card}