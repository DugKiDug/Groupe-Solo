let list = ['Ochaco','Tsu','Bakugo','toga','midoriya','Tomura']

function getALotteryWinner() {

const randomIndex = Math.floor(Math.random() * list.length));
console.log(randomIndex);
console.log(list[randomIndex])

console.log ( ` ${list[randomIndex} has won the LOTTERY `);

return list[randomIndex];
getALotteryWinner();
}
