import React, {useState, useContext, useMemo} from 'react';
import { Button, ConstructorElement, CurrencyIcon, DragIcon} from  '@ya.praktikum/react-developer-burger-ui-components';
import BurgerConstructorStyles from './BurgerConstructor.module.css'
import Modal from '../Modal/Modal';
import OrderDetails from '../OrderDetails/OrderDetails';
import { BurgerIngredientsContext } from '../../services/BurgerIngredientsContext';
import { getOrderNum } from '../../utils/api';

function BurgerConstructor() {

  const [isModalOpened, setIsModalOpened] = useState(false);

  const [orderNumber, setOrderNumber] = useState(null);
  
  const ingredients = useContext(BurgerIngredientsContext);
  const ingredientIds  = useMemo(()=>ingredients.map((ingredientIds) => {return ingredientIds._id}));
  const handleOrderClick = () => {
    getOrderNum(ingredientIds)
        .then((res)=> { 
          setOrderNumber(res.order.number);
          setIsModalOpened(res.success); 
        });
      };
  function closeDetailOrder() {
    setIsModalOpened(false);
  };
  
  const totalIngredient = useMemo(()=>(ingredients.reduce(
    (total, item) => {
      if(item.type === "bun") {
       return total += item.price*2;
      }
      return total += item.price;
    }
    ,
    0
  )));

  const bun = useMemo(()=>(ingredients.find((ingredient) => ingredient.type === "bun")));
  const ingredientsData = useMemo(()=> ingredients.filter((ingredient) => ingredient.type !== "bun"));

    return (
      <section className={`${BurgerConstructorStyles.section} pt-25 pl-4 pr-4 pb-13`}>
        <div className={`${BurgerConstructorStyles.bun}  pl-4 pr-4`}>
          
          <ConstructorElement
            type="top"
            isLocked={true}
            text={`${bun.name} (верх)`}
            price={bun.price}
            thumbnail={bun.image}/>
        </div>
        <ul className={BurgerConstructorStyles.list} >
        {ingredientsData.map((ingredient)=>{
          return(
            <li key={ingredient._id}
              className={`${BurgerConstructorStyles.item} pb-4 pr-2`} >
                <DragIcon type="primary" />
                <ConstructorElement
                  isLocked={false}
                  text={ingredient.name}
                  price={ingredient.price}
                  thumbnail={ingredient.image}/>
            </li>  
          )
        })}
       
        </ul>
        <div className={`${BurgerConstructorStyles.bun} pb-10 pl-8 pr-4`}>
          <ConstructorElement
            type="bottom"
            isLocked={true}
            text={`${bun.name} (низ)`}
            price={bun.price}
            thumbnail={bun.image}/>
        </div>
        <div className={`${BurgerConstructorStyles.total}  pr-4`}>
          <div className={`${BurgerConstructorStyles.info}  pr-10`}>
            <span className='text text_type_digits-default'>
              {totalIngredient}
            </span>
            <CurrencyIcon type="primary"/>
          </div>
          <Button onClick={handleOrderClick} type="primary" size="medium" htmlType="submit">
            Оформить заказ
          </Button>
        </div>

        {isModalOpened && (
        <Modal
          closeAllModals={closeDetailOrder}
        >
          <OrderDetails orderNum={orderNumber}/>
        </Modal>
      )}
      </section>
    );
  }

  // BurgerConstructor.propTypes = {
  //   data: PropTypes.arrayOf(ingredientsPropTypes.isRequired).isRequired,
  // };
  export default BurgerConstructor;