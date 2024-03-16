import {useState} from 'react';
import { getPictureSource } from '../utils/pictureTypes';


export default function Card({card}){
    const imageSource = getPictureSource(card?.pictureType);
    
    return (<>
        <img height={80} width={80} src={imageSource}/>
    </>)
}