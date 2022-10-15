import React from 'react';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import BurgerIngredientsStyles from  './BurgerIngredients.module.css'
function BurgerIngredients({ data }) {
    
    const [current, setCurrent] = React.useState('bun')
    return (
        <section>
            <h1 className={BurgerIngredientsStyles.title}>Соберите бургер</h1>
            <div style={{ display: 'flex' }}>
                <Tab 
                    value="bun" 
                    active={current === 'bun'} 
                    onClick={setCurrent}>Булки
                </Tab>
                <Tab 
                    value="sauce" 
                    active={current === 'sauce'} 
                    onClick={setCurrent}>Соусы
                </Tab>
                <Tab 
                    value="main" 
                    active={current === 'main'} 
                    onClick={setCurrent}>Начинки
                </Tab>
            </div>
        </section>
    )

}
export default BurgerIngredients;