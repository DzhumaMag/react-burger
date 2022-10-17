import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ingredientsPropTypes } from '../../utils/prop-types';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import IngredientsCategory from '../IngredientsCategory/IngredientsCategory';
import BurgerIngredientsStyles from  './BurgerIngredients.module.css';
import IngredientDetails from '../IngredientDetails/IngredientDetails';
import Modal from '../Modal/Modal';
import { INGREDIENTS } from '../../utils/ingredients';

function BurgerIngredients({ data }) {
    
    const [current, setCurrent] = React.useState('bun');

    function clickOnIngredientType(id){
        setCurrent(id);
        document.querySelector(`#${id}`)?.scrollIntoView({ behavior: 'smooth' });
      };
      const [ingredientsModal, setIngredientsModal] = useState(null);
      //закрытие всех модальных окон
      const closeAllModals = () => {
        setIngredientsModal(null);
      };
    return (
        <section>
            <h1 className={`${BurgerIngredientsStyles.title} text text_type_main-large mb-5 pt-10`}>Соберите бургер</h1>
            <div
              className={`${BurgerIngredientsStyles.wrapper} pb-10`}>
                <Tab 
                    value={'bun'}
                    active={current === 'bun'} 
                    onClick={clickOnIngredientType}>Булки
                </Tab>
                <Tab 
                    value={'sauce'}
                    active={current === 'sauce'} 
                    onClick={clickOnIngredientType}>Соусы
                </Tab>
                <Tab 
                    value={'main'}
                    active={current === 'main'} 
                    onClick={clickOnIngredientType}>Начинки
                </Tab>
            </div>
            <div className={BurgerIngredientsStyles.container}>
        <IngredientsCategory
          id={'bun'}
          title={'Булки'}
          type={'bun'}
          ingredients={data}
          onIngredientClick={setIngredientsModal}
          />
        <IngredientsCategory
          id={'sauce'}
          title={'Соусы'}
          type={'sauce'}
          ingredients={data}
          onIngredientClick={setIngredientsModal}
        />
        <IngredientsCategory
          id={'main'}
          title={'Начинки'}
          type={'main'}
          ingredients={data}
          onIngredientClick={setIngredientsModal}
        />
      </div>
      {ingredientsModal && (
        <Modal
          onOverlayClick={closeAllModals}
          closeAllModals={closeAllModals}
        >
          <IngredientDetails data={ingredientsModal} />
        </Modal>
      )}

        </section>
    )

}
BurgerIngredients.propTypes = {
  ingredients: PropTypes.arrayOf(ingredientsPropTypes.isRequired).isRequired,
};

export default BurgerIngredients;