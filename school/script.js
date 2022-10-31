"use strict";

const addButton = document.getElementById("addMonster");
const monsterDB = document.querySelector(".monsterDB");

const changeHtml = function () {
  monsterDB.innerHTML = "";
  for (let monsterCard of monsterObject.monster) {
    const newMonsterCard = document.createElement("div");
    newMonsterCard.innerHTML = `
                <div>
                    name: ${monsterCard.name} 
                </div>
                <div>
                    type: ${monsterCard.type}
                </div>
                <div id="monsterColor">
                    color: ${monsterCard.color}
                </div> 
                <button class="show-modal">Edit</button>

                </br>
                </br>
              `;

    monsterDB.appendChild(newMonsterCard);
  }
};

const monsterObject = {
  monster: [
    {
      name: "Laurynas",
      type: "small",
      color: "red",
      tentacles: 3,
      horns: 4,
      eyes: 2,
      arms: 5,
    },
    {
      name: "Someone",
      type: "big",
      color: "red",
      tentacles: 5,
      horns: 5,
      eyes: 5,
      arms: 3,
    },
    {
      name: "Jesper",
      type: "small",
      color: "blue",
      tentacles: 3,
      horns: 4,
      eyes: 2,
      arms: 5,
    },
  ],

  addMonster: function ({ name, type, color }) {
    return this.monster.push({
      name: name,
      type: type,
      color: color,
      tentacles: Math.trunc(Math.random() * 25),
      horns: Math.trunc(Math.random() * 25),
    });
  },

  removeMonster: function (name) {
    for (let i = 0; i < this.monster.length; i++) {
      if (this.monster[i].name == name) {
        this.monster.splice(i, 1);
      }
    }
  },

  editMonster: function ({ name, tentacles, horns, eyes, arms }) {
    const monster = this.monster.filter((i) => i.name === name)[0];

    monster.horns = horns || monster.horns;
    monster.tentacles = tentacles || monster.tentacles;
    monster.eyes = eyes || monster.eyes;
    monster.arms = arms || monster.arms;
  },

  findMonstersColor: function (color) {
    const foundMonsters = this.monster.filter((i) => i.color === color);

    return foundMonsters;
  },

  findMonstersType: function (type) {
    const foundMonsters = this.monster.filter((i) => i.type === type);

    return foundMonsters;
  },
};

changeHtml();

addButton.addEventListener("click", function () {
  monsterObject.addMonster({ name: "Yes", type: "medium", color: "blue" });
  changeHtml();
});

// monsterObject.findMonstersType("small").map((obj) => console.log(obj));

// console.log(monsterObject.monster);

// monsterObject.removeMonster({
//   name: "Jesper",
// });

// monsterObject.editMonster({
//   name: "Laurynas",
//   tentacles: 10,
//   horns: null,
//   eyes: 3,
//   arms: 10,
// });

// console.log(monsterObject.monster);

// monsterObject.addMonster("hi", "yo", "bye");
// console.log(monsterObject.monster);

// monsterObject.removeMonster("Laurynas");

// console.log(monsterObject.monster);

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnsOpenModal = document.querySelectorAll(".show-modal");

const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener("click", openModal);
}

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);
