import React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { Header } from './components/header/Header';
import './App.scss';

function App() {
  return (
    <Provider store={store}>
      <Header />
      <div className='app'>
        <h1>Redux </h1>
      </div>
    </Provider>
  );
}

export default App;
