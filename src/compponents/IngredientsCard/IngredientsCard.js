import React from 'react';
import IngredientsCardStyles from './IngredientsCard.module.css';
import { Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import PropTypes from 'prop-types';
import { ingredientsPropTypes } from '../../utils/prop-types';
function IngredientsCard({ingredient, count, onIngredientClick}) {
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
                src={ingredient.image}
                alt={ingredient.name}
                onClick={() => {
                    onIngredientClick(ingredient);
                  }}
            />

            <p 
                className={`${IngredientsCardStyles.price} mt-1 mb-1 text text_type_digits-default`}>
                {ingredient.price}
                
                <CurrencyIcon type="primary" />
            </p>
            <p className={`text text_type_main-default`}>{ingredient.name}</p>
            </section>
    )
}

IngredientsCard.propTypes = {
    ingredient: ingredientsPropTypes.isRequired,
    count: PropTypes.string,
    onIngredientClick: PropTypes.func.isRequired,
  };
export default IngredientsCard;