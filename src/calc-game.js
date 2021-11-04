import console from 'console';
import readlineSync from 'readline-sync';
import { getRandomInt } from './helpers.js';

const genQuestion = () => {
  const operators = ['+', '-', '/', '*'];
  const op = operators[getRandomInt(0, operators.length - 1)];

  const operands = [];
  let answer;

  if (op === '+') {
    answer = operands[0] + operands[1];
    operands.push(getRandomInt(0, 100));
    operands.push(getRandomInt(0, 100));
  }
  if (op === '-') {
    answer = operands[0] - operands[1];
    operands.push(getRandomInt(0, 100));
    operands.push(getRandomInt(0, 100));
  }
  if (op === '/') {
    answer = operands[0] / operands[1];
    operands.push(getRandomInt(0, 50));
    operands.push(getRandomInt(0, 10));
  }
  if (op === '*') {
    answer = operands[0] * operands[1];
    operands.push(getRandomInt(0, 20));
    operands.push(getRandomInt(0, 10));
  }

  return { operands, op, answer };
};

export const startGame = (name) => {
  console.log('What is the result of the expression?');

  for (let i = 0; i < 3; i += 1) {
    const question = genQuestion();
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
