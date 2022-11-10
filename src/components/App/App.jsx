import React, {useEffect, useState} from 'react';
import './App.css';
import AppHeader from '../AppHeader/AppHeader';
import BurgerConstructor  from '../BurgerConstructor/BurgerConstructor';
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients';
import { getServerData, getOrderNum } from '../../utils/api';
import { BurgerIngredientsContext } from '../../services/BurgerIngredientsContext';
function App() {

  const [ingredients, setIngredients] = useState(null);

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
      <BurgerIngredientsContext.Provider value={ingredients}>
        <main className="wrapper">
          {ingredients && <BurgerIngredients data={ingredients} />}
          {ingredients && <BurgerConstructor data={ingredients} />}
        </main>
      </BurgerIngredientsContext.Provider>

    </div>
    );


    }

export default App;
