import Image from "../img/gnome.png";
// Создаем игровое поле 4х4
const cell_count = 16;
const gameField = document.querySelector("#game-field");
for (let i = 0; i < cell_count; i++) {
  const cell = document.createElement("div");
  cell.classList.add("game-cell");
  gameField.append(cell);
}

// // Функция для выбора случайной свободной клетки
function randomCell() {
  return Math.floor(Math.random() * cell_count); // От 0 до 15 включительно
}

// // Начальная позиция гнома
let currentPosition = randomCell();
// const gnomeImage = new Image();
const gnomeImage = document.createElement('img');
gnomeImage.src = Image; //'./img/gnome.png'; // Подставьте путь к вашей картинке!
gnomeImage.alt = "Gnome";
document.querySelectorAll(".game-cell")[currentPosition].append(gnomeImage);

// // Интервал обновления положения гнома
setInterval(() => {
  let nextPosition;
  do {
    nextPosition = randomCell(); // Выбираем новую клетку
  } while (nextPosition === currentPosition); // Убедимся, что новая позиция отличается от старой

  //   // Меняем родителю элемента (переносим картинку)
  document.querySelectorAll(".game-cell")[nextPosition].append(gnomeImage);
  currentPosition = nextPosition;
}, 1000); // Каждые 1 секунду меняем положение

// import Image from '../img/gnome.png';

// // Определяем размеры игрового поля
// const ROWS = 4;
// const COLS = 4;
// const CELL_COUNT = ROWS * COLS; // Количество клеток (4 x 4 = 16)

// // Создаем игровое поле
// const gameField = document.querySelector('#game-field');
// for (let i = 0; i < CELL_COUNT; i++) {
//   const cell = document.createElement('div');
//   cell.classList.add('game-cell');
//   gameField.append(cell);
// }

// // Функция для выбора случайной пустой клетки
// function randomCell() {
//   return Math.floor(Math.random() * CELL_COUNT); // Генерируем число от 0 до 15 включительно
// }

// // Начальная позиция гнома
// let currentPosition = randomCell();

// // Элемент изображения гнома
// const gnomeImage = document.createElement('img');
// gnomeImage.src = Image; // Подставляем путь к изображению
// gnomeImage.alt = 'Gnome';

// // Размещаем гнома на начальной позиции
// document.querySelectorAll('.game-cell')[currentPosition].appendChild(gnomeImage);

// // Интервал обновления положения гнома каждые 1 секунду
// setInterval(() => {
//   let nextPosition;
//   do {
//     nextPosition = randomCell(); // Новая случайная позиция
//   } while (nextPosition === currentPosition); // Избегаем перемещения на ту же позицию

//   // Перемещаем гнома на новую позицию
//   document.querySelectorAll('.game-cell')[nextPosition].appendChild(gnomeImage);
//   currentPosition = nextPosition;
// }, 1000); // Каждую секунду меняем положение
