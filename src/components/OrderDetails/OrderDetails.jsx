import done from '../../images/done.svg';
import OrderDetailsStyles from './OrderDetails.module.css';
import PropTypes from 'prop-types';

function OrderDetails(orderNum) {

    return (
        <div className={`${OrderDetailsStyles.popup} pt-30 pr-25 pb-30 pl-25 `}>
          <h2 className={`${OrderDetailsStyles.order} text text_type_digits-large mb-8 `}>{orderNum.orderNum}</h2>
          <p className={'text text_type_main-medium mb-15'}>идентификатор заказа</p>
          <img
            className={'mb-15'}
            src={done}
            alt='Заказ готовится'
          />
          <p className={`text text_type_main-default mb-2`}>Ваш заказ начали готовить</p>
          <span className={`text text_type_main-default text_color_inactive`}>
            Дождитесь готовности на орбитальной станции
          </span>
        </div>
      );
}
  OrderDetails.propTypes = {
    orderNum: PropTypes.number,
  };
export default OrderDetails;