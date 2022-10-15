import React from 'react';
import IngredientsCardStyles from './IngredientsCard.module.css';
import { Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';

function IngredientsCard([ingredients, count]) {
    return (
        <>
        {count > 0 && (
            <Counter
                count={count}
                size='default'
                className={`text text_type_digits-default`}
            >
            </Counter>
        ) }
            <img>        
                className={`ml-4 mr-4 ${IngredientsCardStyles.img}`}
                src={ingredients.image}
                alt={ingredients.name}</img>

            <p 
                className={`${IngredientsCardStyles.price} mt-1 mb-1 text text_type_digits-default`}>
                {ingredients.price}
                {ingredients.price && 
                <CurrencyIcon type={'primary'} />}
            </p>
            <p className={`text text_type_main-default`}>{ingredients.name}</p>
            </>

    )
}
export default IngredientsCard;