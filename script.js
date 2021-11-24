
let buttonOk = document.getElementById('buttonOk')
let input = document.getElementById('input')
let secretNum = getRandom(0, 20)
let hpTitle = document.getElementById('hpTitle')
let hp = 5
let mainTitle = document.getElementById('mainTitle')
let hints = document.getElementById('hints')
let buttonNewgame = document.getElementById('buttonNewgame')
let cheatCode = 666

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

buttonOk.onclick = function (event) {
    //что-бы не обновлялась страница 
    event.preventDefault();
    //console.log(input.value)
    if (input.value == cheatCode) {
        console.log('You Win');
        mainTitle.innerHTML = 'you Win'
    } else {
        if (input.value == secretNum) {
            console.log('You Win');
            mainTitle.innerHTML = 'you Win'
            buttonOk.disabled = true
        } else {
            console.log('You lose');
            hp = hp - 1
            hpTitle.innerHTML = 'Hp/' + hp
            if (hp == 0) {
                buttonOk.disabled = true
                mainTitle.innerHTML = 'you lose. my Number was ' + secretNum
            }
            if (secretNum > input.value) {
                hints.innerHTML = 'My Number is bigger'
            } else {
                hints.innerHTML = 'My Number is smaller'
            }

        }
        input.select()
    }


}
buttonNewgame.onclick = function () {
    console.log('newGame')
    mainTitle.innerHTML = 'угадай число'
    input.value = ''
    hp = 5
    hpTitle.innerHTML = 'Hp/5'
    buttonOk.disabled = false
    hints.innerHTML = 'Вводи число и нажимай окей'
}

