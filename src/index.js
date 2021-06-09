const add = document.getElementById('add'),
    minus = document.getElementById('minus'),
    number = document.querySelector('span');

let count = 0;

number.innerText = count;

const updateText = () => {
  number.innerText = count;
};

const handleAdd = () => {
    count++;
    updateText();
};

const handleMinus = () => {
    count--;
    updateText();
};


add.addEventListener('click', handleAdd);
minus.addEventListener('click', handleMinus);