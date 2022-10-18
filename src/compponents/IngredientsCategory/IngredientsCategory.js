import React from 'react';
import IngredientsCategoryStyles from './IngredientsCategory.module.css';
import IngredientsCard from '../IngredientsCard/IngredientsCard';
// import data from '../../utils/data';
import PropTypes from 'prop-types';
import { ingredientsPropTypes } from '../../utils/prop-types';

function IngredientsCategory({titleId, title, type, ingredients, onIngredientClick}) {
    return ( 
        <section>
            <h2 
                className={`${IngredientsCategoryStyles.title} text text_type_main-medium pb-6`}
                id={titleId}>{title}
            </h2>
            <ul className={`${IngredientsCategoryStyles.list}`}>
            {ingredients.map((item) => {
            return (
                item.type === type && (
                    <li key={item.titleId}>
                        <IngredientsCard
                            onIngredientClick={onIngredientClick}
                            ingredient={item} 
                            count={item.id}
                           />
                    </li>
                )
                );
                })}
            </ul> 
        </section>
    )
}

IngredientsCategory.propTypes = {
    ingredients: PropTypes.arrayOf(ingredientsPropTypes.isRequired).isRequired,
    onIngredientClick: PropTypes.func.isRequired,
    titleId: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    type: PropTypes.oneOf(["bun", "main", "sauce"]).isRequired
  };
export default IngredientsCategory