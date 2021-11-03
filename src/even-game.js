import console from 'console';
import readlineSync from 'readline-sync';

const getRandomInt = (min, max) => Math.round(min + Math.random() * (max - min));

const askIsEven = (number) => {
  console.log(`Question: ${number}`);
  return readlineSync.question('Your answer: ');
};

export const startGame = (name) => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 0; i < 3; i += 1) {
    const number = getRandomInt(3, 100);
    const isEven = number % 2 === 0;
    const rightAnswer = isEven ? 'yes' : 'no';
    const userAnswer = askIsEven(number);
    if (rightAnswer === userAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
};
