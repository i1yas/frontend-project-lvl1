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
      const operators = ['+', '-', '/', '*'];
      const op = operators[getRandomInt(0, operators.length - 1)];

      if (op === '+') {
        const a = getRandomInt(0, 50);
        const b = getRandomInt(0, 50);
        const answer = a + b;
        const text = `${a} + ${b}`;
        return { answer, text };
      }
      if (op === '-') {
        const a = getRandomInt(0, 50);
        const b = getRandomInt(0, 20);
        const answer = a - b;
        const text = `${a} - ${b}`;
        return { answer, text };
      }
      if (op === '/') {
        const answer = getRandomInt(0, 10);
        const divisor = getRandomInt(0, 10);
        const dividend = answer * divisor;
        const text = `${dividend} / ${divisor}`;
        return { answer, text };
      }
      if (op === '*') {
        const a = getRandomInt(0, 20);
        const b = getRandomInt(0, 5);
        const answer = a * b;
        const text = `${a} * ${b}`;
        return { answer, text };
      }

      return null;
    },
    isEqual: (rightAnswer, userAnswer) => rightAnswer === Number(userAnswer),
  });
};

export const startGcdGame = (name) => {
  console.log('Find the greatest common divisor of given numbers.');

  const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));

  askQuestions({
    name,
    getQuestion: () => {
      // NOTE: we multiply 2 numbers to minimize trivial cases
      const a = getRandomInt(3, 9) * getRandomInt(2, 5);
      const b = getRandomInt(3, 9) * getRandomInt(10, 20);
      const text = [a, b].join(' ');
      return { answer: gcd(a, b), text };
    },
    isEqual: (rightAnswer, userAnswer) => rightAnswer === Number(userAnswer),
  });
};
