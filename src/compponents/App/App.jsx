import React, {useEffect, useState} from 'react';
import './App.css';
import AppHeader from '../AppHeader/AppHeader';
import BurgerConstructor  from '../BurgerConstructor/BurgerConstructor';
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients';
import { getServerData } from '../../utils/api';


function App() {

  const [ingredients, setIngredients] = useState(null); //eslint-disable-line

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
        {ingredients && <BurgerIngredients data={ingredients} />}
        {ingredients && <BurgerConstructor data={ingredients} />}
      </main>
    </div>
    );


    }

export default App;
