import { usePicturePokerContext } from "./PicturePokerProvider";
import { pictureTypes, getPictureSource } from "../utils/pictureTypes.jsx";
import '../css/PictureTypes.css';
import { card } from "../utils/card.jsx";
import Card from "./Card.jsx";


export default function PictureTypes() {

    return (<>
    <div className="image-container">
        {pictureTypes.map((type) => {
            let newCard = new card(type);
            
            return (<>
                <Card card={newCard}/>
            </>)
        })}
    </div>

    </>);
}