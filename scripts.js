const btn = document.querySelector('#root button');
let pointer = 0;
const answer = document.querySelector('#answer');
let inputValue = '';

btn.addEventListener('click', ()=>bracketString());

function bracketString() {
    answer.innerHTML = "Всё правильно";
    try {
        inputValue = document.querySelector('#input').value;
        if (pointer >= inputValue.length) answer.innerHTML = 'Всё Правильно';
        else {
            nesting_lvl_1();
            bracketString();
        }
    } catch (e) {
        answer.innerHTML = e;
    }
    finally {
        pointer = 0;
    }
}

function nesting_lvl_1() {
    let ch = inputValue[pointer];
    if (ch === '(' || ch === '['){
        if (ch === '(') {
            ++pointer;
            nesting_lvl_2();
            ch = inputValue[pointer];
            if (ch !== ')') throw Error(`Ожидался символ ) (ошибка на позиции ${pointer})`);
        }
        else if (ch === '[') {
            ++pointer;
            nesting_lvl_2();
            ch = inputValue[pointer];
            if (ch !== ']') throw Error(`Ожидался символ ] (ошибка на позиции ${pointer})`);
        }
        ++pointer;
    }
    else throw Error(`Ошибка ввода символа! (ошибка на позиции ${pointer})`);
}

function nesting_lvl_2() {
    let ch = inputValue[pointer];
    if (ch === '(' || ch === '['){
        if (ch === '(') {
            ch = inputValue[++pointer];
            if (ch === ')'){
                ++pointer;
                nesting_lvl_2();
            }
            else throw Error(`Ожидался символ ) (ошибка на позиции ${pointer})`);
        }
        else if (ch === '[') {
            ch = inputValue[++pointer];
            if (ch === ']'){
                ++pointer;
                nesting_lvl_2();
            }
            else throw Error(`Ожидался символ ] (ошибка на позиции ${pointer})`);
        }
    }
    else if (ch === undefined) throw Error (`Не хватает символа!`);
}
