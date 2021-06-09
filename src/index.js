import { createStore } from 'redux';

const add = document.getElementById('add'),
    minus = document.getElementById('minus'),
    number = document.querySelector('span');

const countModifier = (count = 0, action) => {
    if ( action.type === 'ADD' ) {
        return ++count;
    } else if ( action.type === 'MINUS' ) {
        return --count;
    }
    return count;
};

const countStore = createStore(countModifier);

countStore.dispatch({type: 'ADD'});
console.log(countStore.getState());

countStore.dispatch({type: 'MINUS'});
console.log(countStore.getState());

