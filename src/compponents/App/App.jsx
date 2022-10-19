import React, {useEffect, useState} from 'react';
import data from '../../utils/data';
import './App.css';
import AppHeader from '../AppHeader/AppHeader';
import BurgerConstructor  from '../BurgerConstructor/BurgerConstructor';
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients';
import { getServerData } from '../../utils/api';


function App() {

  const [ingredient, setIngredients] = useState(data); //eslint-disable-line

  useEffect(() => {
    getServerData()
      .then((res) => setIngredients(res.data))
      .catch((err) => {
        console.log("Ошибка при получении даннных");
      });
  }, []);

  
  return (
    
    <div className="App">
      <AppHeader />
      <main className="wrapper">
        <BurgerIngredients data={ingredient} /> 
        <BurgerConstructor data={ingredient} />
      </main>
    </div>
  );
}

export default App;
