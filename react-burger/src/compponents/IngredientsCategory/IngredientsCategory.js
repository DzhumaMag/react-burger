import React from 'react';
import IngredientsCategoryStyles from './IngredientsCategory.module.css';
import IngredientsCard from '../IngredientsCard/IngredientsCard';

function IngredientsCategory({title, titleId, ingredients}) {
    return ( 
        <>
        
        <h2 className={IngredientsCategoryStyles.title}></h2>
        <div>
            <IngredientsCard>
            </IngredientsCard>
        </div>
        
        </>

    )
}