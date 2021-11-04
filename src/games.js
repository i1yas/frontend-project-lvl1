import console from 'console';
import { getRandomInt, gcd, askQuestions } from './index.js';

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

export const startProgressionGame = (name) => {
  console.log('What number is missing in the progression?');

  const genProgession = () => {
    const length = getRandomInt(5, 10);
    const start = getRandomInt(1, 20);
    const step = getRandomInt(3, 20);

    const progression = [];
    for (let i = 0; i < length; i += 1) {
      progression.push(start + i * step);
    }

    return progression;
  };

  askQuestions({
    name,
    getQuestion: () => {
      const progression = genProgession();
      const placeholderIndex = getRandomInt(0, progression.length - 1);

      const progressionForUser = progression.slice();
      progressionForUser[placeholderIndex] = '..';

      const answer = progression[placeholderIndex];
      const text = progressionForUser.join(' ');

      return { answer, text };
    },
    isEqual: (rightAnswer, userAnswer) => rightAnswer === Number(userAnswer),
  });
};

export const startPrimeGame = (name) => {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

  const getComposite = () => getRandomInt(5, 20) * getRandomInt(10, 50);

  const getPrime = (n) => {
    const notPrime = (number) => {
      const end = Math.round(Math.sqrt(number) + 1);
      for (let i = 2; i <= end; i += 1) {
        if (gcd(number, i) !== 1) return true;
      }
      return false;
    };

    const iter = (number, i) => {
      if (notPrime(number)) return iter(number + 1, i);
      if (i === n) return number;
      return iter(number + 1, i + 1);
    };

    return iter(2, 0);
  };

  askQuestions({
    name,
    getQuestion: () => {
      const isPrime = Math.random() > 0.4;
      if (isPrime) {
        const prime = getPrime(getRandomInt(0, 20));
        return { text: prime, answer: 'yes' };
      }
      const number = getComposite();
      return { text: number, answer: 'no' };
    },
    isEqual: (rightAnswer, userAnswer) => rightAnswer === userAnswer,
  });
};
