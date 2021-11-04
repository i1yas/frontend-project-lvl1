import console from 'console';
import readlineSync from 'readline-sync';
import { getRandomInt } from './index.js';

export const startEvenGame = (name) => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 0; i < 3; i += 1) {
    const number = getRandomInt(3, 100);
    const isEven = number % 2 === 0;
    const rightAnswer = isEven ? 'yes' : 'no';
    console.log(`Question: ${number}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (rightAnswer === userAnswer) {
      console.log('Correct!');
    } else {
      console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`
      );
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
};

const genCalcQuestion = () => {
  const operators = ['+', '-', '/', '*'];
  const op = operators[getRandomInt(0, operators.length - 1)];

  const operands = [];
  let answer;

  if (op === '+') {
    operands.push(getRandomInt(0, 100));
    operands.push(getRandomInt(0, 100));
    answer = operands[0] + operands[1];
  }
  if (op === '-') {
    operands.push(getRandomInt(0, 100));
    operands.push(getRandomInt(0, 100));
    answer = operands[0] - operands[1];
  }
  if (op === '/') {
    operands.push(getRandomInt(0, 50));
    operands.push(getRandomInt(0, 10));
    answer = operands[0] / operands[1];
  }
  if (op === '*') {
    operands.push(getRandomInt(0, 20));
    operands.push(getRandomInt(0, 10));
    answer = operands[0] * operands[1];
  }

  return { operands, op, answer };
};

export const startCalcGame = (name) => {
  console.log('What is the result of the expression?');

  for (let i = 0; i < 3; i += 1) {
    const question = genCalcQuestion();
    console.log(`Question: ${question.operands[0]} ${question.op} ${question.operands[1]}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (question.answer === Number(userAnswer)) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${question.answer}'.`);
      console.log("Let's try again, Sam");
      return;
    }
  }

  console.log(`Congratulations, ${name}`);
};
