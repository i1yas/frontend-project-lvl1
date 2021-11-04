import console from 'console';
import { getRandomInt, askQuestions } from './index.js';

export const startEvenGame = (name) => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  askQuestions({
    name,
    getQuestion: () => {
      const number = getRandomInt(3, 100);
      const isEven = number % 2 === 0;
      const answer = isEven ? 'yes' : 'no';

      return { text: String(number), answer };
    },
    isEqual: (rightAnswer, userAnswer) => rightAnswer === userAnswer,
  });
};

export const startCalcGame = (name) => {
  console.log('What is the result of the expression?');

  askQuestions({
    name,
    getQuestion: () => {
      let text;
      let answer;

      const operators = ['+', '-', '/', '*'];
      const op = operators[getRandomInt(0, operators.length - 1)];

      if (op === '+') {
        const a = getRandomInt(0, 100);
        const b = getRandomInt(0, 100);
        answer = a + b;
        text = `${a} + ${b}`;
      }
      if (op === '-') {
        const a = getRandomInt(0, 100);
        const b = getRandomInt(0, 100);
        answer = a - b;
        text = `${a} - ${b}`;
      }
      if (op === '/') {
        const a = getRandomInt(0, 50);
        const b = getRandomInt(0, 10);
        answer = a / b;
        text = `${a} / ${b}`;
      }
      if (op === '*') {
        const a = getRandomInt(0, 20);
        const b = getRandomInt(0, 10);
        answer = a * b;
        text = `${a} * ${b}`;
      }

      return { text, answer };
    },
    isEqual: (rightAnswer, userAnswer) => rightAnswer === Number(userAnswer),
  });
};
