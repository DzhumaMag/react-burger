import React from 'react';
import { Button, ConstructorElement, CurrencyIcon, DragIcon} from  '@ya.praktikum/react-developer-burger-ui-components';
import BurgerConstructorStyles from './BurgerConstructor.module.css'


function BurgerConstructor({ order }) {
    const ingredients = order.reduce((res, item) => {
      res.total += item.price;
  
      if (item.type === 'bun') {
        res.bun = item;
      } else {
        res.others.push(item);
      }
      return res;
    }, { others: [], total: 0 })
  
    return (
      <section className={BurgerConstructorStyles.section + ' pt-25 pl-4 pr-4 pb-13'}>
        <div className={BurgerConstructorStyles.bun + ' pl-4 pr-4'}>
          <ConstructorElement
            type="top"
            isLocked={true}
            text={ingredients.bun.name + ' (верх)'}
            price={ingredients.bun.price}
            thumbnail={ingredients.bun.image}/>
        </div>
        <ul className={BurgerConstructorStyles.list} >
          {
            ingredients.others.map((item, index) => {
              if (item.type !== 'bun') {
                return (
                  <li key={index} className={BurgerConstructorStyles.item + ' pb-4 pr-2'} >
                    <DragIcon type="primary" />
                    <ConstructorElement
                      isLocked={false}
                      text={item.name}
                      price={item.price}
                      thumbnail={item.image}/>
                  </li>
                );
              }
            })
          }
        </ul>
        <div className={`${BurgerConstructorStyles.bun} pb-10 pl-8 pr-4`}>
          <ConstructorElement
            type="bottom"
            isLocked={true}
            text={`${ingredients.bun.name} (низ)`}
            price={`${ingredients.bun.price}`}
            thumbnail={`${ingredients.bun.image}`}/>
        </div>
        <div className={`${BurgerConstructorStyles.total}  pr-4`}>
          <div className={`${BurgerConstructorStyles.info}  pr-10`}>
            <span className='text text_type_digits-default'>{ingredients.total}</span>
            <CurrencyIcon type="primary"/>
          </div>
          <Button type="primary" size="medium" htmlType="submit">
            Оформить заказ
          </Button>
        </div>
      </section>
    );
  }

  
  export default BurgerConstructor;