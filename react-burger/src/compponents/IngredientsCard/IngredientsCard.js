import React from 'react';
import IngredientsCardStyles from './IngredientsCard.module.css';
import { Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import PropTypes from 'prop-types';
import { ingredientsPropTypes } from '../../utils/prop-types';
function IngredientsCard({ingredients, count, onIngredientClick}) {
    return (
        <section className={IngredientsCardStyles.card}>
        {count > 0 && (
            <Counter
                count={count}
                size='default'
                className={`text text_type_digits-default`}
            >
            </Counter>
        )}
        
            <img      
                className={`${IngredientsCardStyles.img} ml-4 mr-4`}
                src={ingredients.image}
                alt={ingredients.name}
                onClick={() => {
                    onIngredientClick(ingredients);
                  }}
            />

            <p 
                className={`${IngredientsCardStyles.price} mt-1 mb-1 text text_type_digits-default`}>
                {ingredients.price}
                {ingredients.price && 
                <CurrencyIcon type={'primary'} />}
            </p>
            <p className={`text text_type_main-default`}>{ingredients.name}</p>
            </section>
    )
}

IngredientsCard.propTypes = {
    ingredient: ingredientsPropTypes.isRequired,
    count: PropTypes.number,
    onIngredientClick: PropTypes.func.isRequired,
  };
export default IngredientsCard;