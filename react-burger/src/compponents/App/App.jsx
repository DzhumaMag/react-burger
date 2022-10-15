import React from 'react';
import data from '../../utils/data';
// import logo from '';
import './App.css';
import AppHeader from '../AppHeader/AppHeader';
import BurgerConstructor  from '../BurgerConstructor/BurgerConstructor';
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients';
function App() {
  return (
    <div className="App">
      <AppHeader />
      <main className='wrapper'>
      <BurgerIngredients />

      <BurgerConstructor order={data} />
      </main>
    </div>
  );
}

export default App;
