import {followingState} from "./script.js";


const makeConcat = function () { // функция которая "склеивает" числo 100500 и ставит запятую между ними
    return `${(followingState.followersNumber).toString().substr(0,3)},${parseInt((followingState.followersNumber).toString().substr(3,6))}`;
}

function changeButtonState(checkBtnState,btnToChange) { // функция которая меняет внешний вид кнопки , можно использовать на других кнопках
    if (checkBtnState == 'true') {
        btnToChange.innerHTML = "Following"
        btnToChange.classList.add('btn-following')
    } else if (checkBtnState == 'false') {
        btnToChange.innerHTML = "Follow"
        btnToChange.classList.remove('btn-following')
    }
}

export {makeConcat,changeButtonState}