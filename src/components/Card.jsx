import {useState} from 'react';
import { getPictureSource } from '../utils/pictureTypes';


export default function Card({card}){
    const imageSource = getPictureSource(card?.pictureType);
    console.log({imageSource})
    
    return (<>
        <img height={80} width={80} src={imageSource}/>
    </>)
}