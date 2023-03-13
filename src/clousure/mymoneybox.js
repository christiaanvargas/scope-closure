/* 
function moneyBox(coins) {
    let saveCoins = 0;
    saveCoins += coins;
    console.log(`Money Box $ ${saveCoins}`);
}

moneyBox(5);
moneyBox(5);
*/

function moneyBox() {
    let saveCoins = 0;
    function countCoins(coins) {
        saveCoins += coins;
        console.log(`Money Box $ ${saveCoins}`)
    }
    return countCoins;
}

const myMoneyBox = moneyBox();
myMoneyBox(5);
myMoneyBox(5);
myMoneyBox(15);

const moneyBoxAnna = moneyBox();
moneyBoxAnna(10);
moneyBoxAnna(20);
moneyBoxAnna(5);