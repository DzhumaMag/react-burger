import React from 'react';
import { BurgerIcon, ListIcon, ProfileIcon, Logo} from '@ya.praktikum/react-developer-burger-ui-components';


import AppHeaderStyles from './AppHeader.module.css';

function AppHeader() {
    return (
      <header className={AppHeaderStyles.header}>
        <nav className={`${AppHeaderStyles.nav} pt-4 pb-4`}>
          <ul className={`${AppHeaderStyles.list}`}>
            <li>
            <a href='#constructor' className={`${AppHeaderStyles.link} ${AppHeaderStyles.active} pl-5 pt-4 pr-5 pb-4 text text_type_main-default text_color_inactive`}>
                <BurgerIcon type="primary"/>
                Конструктор
              </a>
            </li>
            <li>
            <a href='#feed' className={`${AppHeaderStyles.link} pl-5 pt-4 pb-4 text text_type_main-default text_color_inactive`}>
                <ListIcon type="secondary"/>
                Лента заказов
              </a>
            </li>
          </ul>
          <Logo />
          <a href='#profile' className={`${AppHeaderStyles.link} ${AppHeaderStyles.profile} pl-5 pt-4 pr-5 pb-4 text text_type_main-default text_color_inactive`}>
          <ProfileIcon type="secondary" />
          Личный кабинет
        </a>
        </nav>
      </header>
    );
  };
  
  export default AppHeader;