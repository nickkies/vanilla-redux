import { createStore } from 'redux';

const add = document.getElementById('add'),
    minus = document.getElementById('minus'),
    number = document.querySelector('span');

number.innerText = 0;

const ADD = 'ADD';
const MINUS = 'MINUS';

const countModifier = (count = 0, action) => {
    switch (action.type) {
        case ADD:
            return ++count;
        case MINUS:
            return --count;
        default:
            return 0;
    }
};

const countStore = createStore(countModifier);

const onChange = () => {
    number.innerText = countStore.getState();
}

countStore.subscribe(onChange);

const handleAdd = () => {
    countStore.dispatch({type: ADD});
}

const handleMinus = () => {
    countStore.dispatch({type: MINUS});
}

add.addEventListener('click', handleAdd);
minus.addEventListener('click', handleMinus);


