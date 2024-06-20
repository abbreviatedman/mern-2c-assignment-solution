const { v4: uuid } = require("uuid");

const musicArray = [
  {
    id: uuid(),
    name: "KAYTRANADA",
    age: 30,
  },
  {
    id: uuid(),
    name: "Kenny Beats",
    age: 31,
  },
  {
    id: uuid(),
    name: "Tyler the Creator",
    age: 31,
  },
  {
    id: uuid(),
    name: "Denzel Curry",
    age: 27,
  },
];

const actorsArray = [
  {
    id: uuid(),
    name: "Jonah Hill",
    age: 38,
  },
  {
    id: uuid(),
    name: "Leonardo DiCaprio",
    age: 48,
  },
  {
    id: uuid(),
    name: "Finn Wolfhard",
    age: 19,
  },
  {
    id: uuid(),
    name: "Samuel L Jackson",
    age: 73,
  },
];

module.exports = { actorsArray, musicArray };
