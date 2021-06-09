import { createStore } from 'redux';

const add = document.getElementById('add'),
    minus = document.getElementById('minus'),
    number = document.querySelector('span');

number.innerText = 0;

const countModifier = (count = 0, action) => {
    if ( action.type === 'ADD' ) {
        return ++count;
    } else if ( action.type === 'MINUS' ) {
        return --count;
    }
    return count;
};

const countStore = createStore(countModifier);

const onChange = () => {
    number.innerText = countStore.getState();
}

countStore.subscribe(onChange);

const handleAdd = () => {
    countStore.dispatch({type: 'ADD'});
}

const handleMinus = () => {
    countStore.dispatch({type: 'MINUS'});
}


add.addEventListener('click', handleAdd);
minus.addEventListener('click', handleMinus);


