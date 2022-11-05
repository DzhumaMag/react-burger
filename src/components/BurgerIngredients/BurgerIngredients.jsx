import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { ingredientsPropTypes } from '../../utils/prop-types';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import IngredientsCategory from '../IngredientsCategory/IngredientsCategory';
import BurgerIngredientsStyles from  './BurgerIngredients.module.css';
import IngredientDetails from '../IngredientDetails/IngredientDetails';
import Modal from '../Modal/Modal';
import { BurgerIngredientsContext } from '../../services/BurgerIngredientsContext';

function BurgerIngredients() {
    const ingredients = useContext(BurgerIngredientsContext);

    const [current, setCurrent] = React.useState('bun');

    function clickOnIngredientType(id){
        setCurrent(id);
        document.querySelector(`#${id}`)?.scrollIntoView({ behavior: 'smooth' });
      };
      const [ingredientModal, setIngredientModal] = useState(null);

      const closeModal = () => {
        setIngredientModal(null);
      };
    return (
        <section>
            <h1 className={`${BurgerIngredientsStyles.title} text text_type_main-large mb-5 pt-10`}>Соберите бургер</h1>
            <div
              className={`${BurgerIngredientsStyles.wrapper} pb-10`}>
                <Tab 
                    value="bun"
                    active={current === "bun"} 
                    onClick={clickOnIngredientType}>Булки
                </Tab>
                <Tab 
                    value="sauce"
                    active={current === "sauce"} 
                    onClick={clickOnIngredientType}>Соусы
                </Tab>
                <Tab 
                    value="main"
                    active={current === "main"} 
                    onClick={clickOnIngredientType}>Начинки
                </Tab>
            </div>
            <div className={BurgerIngredientsStyles.container}>
          <div id="bun">
          <IngredientsCategory
          titleId="bun"
          title="Булки"
          type="bun"
          ingredients={ingredients}
          onIngredientClick={setIngredientModal}
          /> 
          </div>
          <div id="sauce">
          <IngredientsCategory
          titleId="sauce"
          title="Соусы"
          type="sauce"
          ingredients={ingredients}
          onIngredientClick={setIngredientModal}
        />
        </div>
        <div id="main">
          <IngredientsCategory
          titleId="main"
          title="Начинки"
          type="main"
          ingredients={ingredients}
          onIngredientClick={setIngredientModal}
        />
        </div>

      </div>
      {ingredientModal && (
        <Modal closeAllModals={closeModal}>
          <IngredientDetails data={ingredientModal} />
        </Modal>
      )}

        </section>
    )

}

// BurgerIngredients.propTypes = {
//   data: PropTypes.arrayOf(ingredientsPropTypes.isRequired).isRequired 
// };

export default BurgerIngredients;