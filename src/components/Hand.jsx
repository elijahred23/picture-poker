import {useState} from 'react';
import Card from './Card';

export default function Hand({cards}){

    return (<>
        {cards.map(card => {
            return <Card card={card} />
        })}
    </>)
}