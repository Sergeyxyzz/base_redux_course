import React from 'react';
import ReactDOM from 'react-dom/client';
import { legacy_createStore as createStore } from 'redux';

const initialState = {value: 0}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INC':
      return {
        ...state, 
        value: state.value + 1
      };
    case 'DEC':
      return {
        ...state, 
        value: state.value - 1
      };
    case 'RND':
      return {
        ...state, 
        value: state.value * action.payload
      };
    default:
      return state
  }
}
const update = () => {
  document.getElementById('counter').textContent = store.getState().value // отрисовываем стейт в UI
}

const store = createStore(reducer) // createStore создает стор моего приложения, аргументом как манипулятор идет редьюсер
store.subscribe(update) // подписались на отслеживание каждого действия в сторе, выводим подписку аргументом, в нашем случае апдейтом

const inc = () => ({type: 'INC'}) // actioncreator
const dec = () => ({type: 'DEC'})
const rnd = (value) => ({type: 'RND', payload: value}) // payload нужен чтобы не фаршмачить в стэйте напрямую

document.getElementById('inc').addEventListener('click', () => {
  store.dispatch(inc())
})

document.getElementById('dec').addEventListener('click', () => {
  store.dispatch(dec())
})

document.getElementById('rnd').addEventListener('click', () => {
  const value = Math.floor(Math.random() * 10)
  store.dispatch(rnd(value)) // выводим в UI значение value
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <>
    
    </>
  </React.StrictMode>
);