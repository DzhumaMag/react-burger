import React, {useState} from 'react';
import { Button, ConstructorElement, CurrencyIcon, DragIcon} from  '@ya.praktikum/react-developer-burger-ui-components';
import BurgerConstructorStyles from './BurgerConstructor.module.css'
import Modal from '../Modal/Modal';
import OrderDetails from '../OrderDetails/OrderDetails';
import PropTypes from 'prop-types';
import { ingredientsPropTypes } from '../../utils/prop-types';

function BurgerConstructor({ data }) {

  const [isModalOpened, setIsModalOpened] = useState(false);

  function closeAllModals() {
    setIsModalOpened(false);
  };

  
  function openModal() {
    setIsModalOpened(true);
  };

    const ingredients = data.reduce((res, item) => {
      res.total += item.price;
  
      if (item.type === 'bun') {
        res.bun.push(item);
      } else {
        res.others.push(item);
      }
      return res;
    }, { others: [], total: 0, bun: []})

    return (
      <section className={`${BurgerConstructorStyles.section} pt-25 pl-4 pr-4 pb-13`}>
        <div className={`${BurgerConstructorStyles.bun}  pl-4 pr-4`}>
          
          <ConstructorElement
            type="top"
            isLocked={true}
            text={`${ingredients.bun[0].name} (верх)`}
            price={ingredients.bun[0].price}
            thumbnail={ingredients.bun[0].image}/>
        </div>
        <ul className={BurgerConstructorStyles.list} >
          {
            ingredients.others.map((item, index) => {
              if (item.type !== 'bun') {
                return (
                  <li key={index} className={`${BurgerConstructorStyles.item} pb-4 pr-2`} >
                    <DragIcon type="primary" />
                    <ConstructorElement
                      isLocked={false}
                      text={item.name}
                      price={item.price}
                      thumbnail={item.image}/>
                  </li>
                );
              } else {return <></>}
            })
          }
        </ul>
        <div className={`${BurgerConstructorStyles.bun} pb-10 pl-8 pr-4`}>
          <ConstructorElement
            type="bottom"
            isLocked={true}
            text={`${ingredients.bun[0].name} (низ)`}
            price={ingredients.bun[0].price}
            thumbnail={ingredients.bun[0].image}/>
        </div>
        <div className={`${BurgerConstructorStyles.total}  pr-4`}>
          <div className={`${BurgerConstructorStyles.info}  pr-10`}>
            <span className='text text_type_digits-default'>{ingredients.total}</span>
            <CurrencyIcon type="primary"/>
          </div>
          <Button onClick={openModal} type="primary" size="medium" htmlType="submit">
            Оформить заказ
          </Button>
        </div>

        {isModalOpened && (
        <Modal
          onOverlayClick={closeAllModals}
          closeAllModals={closeAllModals}
        >
          <OrderDetails closeModal={closeAllModals} />
        </Modal>
      )}
      </section>
    );
  }

  BurgerConstructor.propTypes = {
    ingredients: PropTypes.arrayOf(ingredientsPropTypes.isRequired).isRequired,
  };
  export default BurgerConstructor;