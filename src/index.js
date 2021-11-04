import console from 'console';
import readlineSync from 'readline-sync';

export const getRandomInt = (min, max) => Math.round(min + Math.random() * (max - min));

export const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));

export const askQuestions = ({ name, getQuestion, isEqual }) => {
  for (let i = 0; i < 3; i += 1) {
    const question = getQuestion();
    console.log(`Question: ${question.text}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (isEqual(question.answer, userAnswer)) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${question.answer}'.`);
      console.log(`Let's try again, ${name}`);
      return;
    }
  }

  console.log(`Congratulations, ${name}`);
};
