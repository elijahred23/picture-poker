class card {

    constructor(pictureType) {
        this.showing = true;
        this.setPictureType(pictureType)
    }
    setShowing(newShowing){
        this.showing = newShowing;
    }
    setPictureType(newPictureType){
        this.pictureType = newPictureType;
    }
}

export {card}