const $btn = document.getElementById("btn-kick");
const $btn1 = document.getElementById("btn-shot");
const $btn3 = document.getElementById("btn-start");
const $logs = document.querySelector("#logs");
import Pokemon from "./pokemon.js";
import random from "./random.js";
class Player1 extends Pokemon {
  constructor(props) {
    super(props);
    this.winners = props.winners;
  }
}
const player1 = new Player1({
  name: "Pickachu",
  hp: 100,
  type: "human",
  selectors: "character",
});

const player2 = new Player1({
  name: "Charmander",
  hp: 100,
  type: "fire",
  selectors: "enemy",
});
console.log(player1);
console.log(player2);
function generateLog(firstPerson, secondPerson, dmg) {
  const logs = [
    `${firstPerson.name} вспомнил что-то важное, но неожиданно ${secondPerson.name}, не помня себя от испуга, ударил в предплечье врага. -${dmg} : [${firstPerson.hp.current}/${firstPerson.hp.total}]`,
    `${firstPerson.name} поперхнулся, и за это ${secondPerson.name} с испугу приложил прямой удар коленом в лоб врага. -${dmg} : [${firstPerson.hp.current}/${firstPerson.hp.total}]`,
    `${firstPerson.name} забылся, но в это время наглый ${secondPerson.name}, приняв волевое решение, неслышно подойдя сзади, ударил. -${dmg} : [${firstPerson.hp.current}/${firstPerson.hp.total}]`,
    `${firstPerson.name} пришел в себя, но неожиданно ${secondPerson.name} случайно нанес мощнейший удар. -${dmg} : [${firstPerson.hp.current}/${firstPerson.hp.total}]`,
    `${firstPerson.name} поперхнулся, но в это время ${secondPerson.name} нехотя раздробил кулаком \<вырезанно цензурой\> противника. -${dmg} : [${firstPerson.hp.current}/${firstPerson.hp.total}]`,
    `${firstPerson.name} удивился, а ${secondPerson.name} пошатнувшись влепил подлый удар. -${dmg} : [${firstPerson.hp.current}/${firstPerson.hp.total}]`,
    `${firstPerson.name} высморкался, но неожиданно ${secondPerson.name} провел дробящий удар. -${dmg} : [${firstPerson.hp.current}/${firstPerson.hp.total}]`,
    `${firstPerson.name} пошатнулся, и внезапно наглый ${secondPerson.name} беспричинно ударил в ногу противника -${dmg} : [${firstPerson.hp.current}/${firstPerson.hp.total}]`,
    `${firstPerson.name} расстроился, как вдруг, неожиданно ${secondPerson.name} случайно влепил стопой в живот соперника. -${dmg} : [${firstPerson.hp.current}/${firstPerson.hp.total}]`,
    `${firstPerson.name} пытался что-то сказать, но вдруг, неожиданно ${secondPerson.name} со скуки, разбил бровь сопернику. -${dmg} : [${firstPerson.hp.current}/${firstPerson.hp.total}]`,
  ];
  return logs[random(logs.length) - 1];
}

function trigger(clicks = 1) {
  return function () {
    if (clicks < kickNumber) {
      console.log(
        "Осталось ударов: ",
        kickNumber - clicks++ + "/" + kickNumber
      );
    } else {
      $btn.disabled = true;
      alert("У вас закончились удары :( ");
    }
  };
}
const counter = trigger();
$btn.addEventListener("click", counter);
$btn.addEventListener("click", function () {
  console.log("Kick");
  player1.changeHP(random(20), function (count) {
    console.log("Some change after change HP", count);
    console.log(generateLog(player1, player2, count));
  });
  player2.changeHP(random(20), function (count) {
    console.log("Some change after change HP", count);
    console.log(generateLog(player1, player2, count));
  });
});
$btn1.addEventListener("click", function () {
  console.log("Ulta");
  player1.changeHP(random(500));
  player2.changeHP(random(500));
});
$btn3.onclick = function btnstart() {
  console.log("Start Game!");
  player1.renderHP();
  player2.renderHP();
};