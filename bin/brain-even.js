#!/usr/bin/env node

import readlineSync from 'readline-sync';

const answers = [15, 6, 7];
const isEvenNumber = (number) => {
  if (number % 2 === 0) {
    return 'yes';
  }
  return 'no';
};
const askName = () => readlineSync.question('May I have your name? ');
const getAnswer = () => readlineSync.question('Your answer: ');


const game = () => {
  console.log('Welcome to the Brain Games!');
  const name = askName();
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i < answers.length; i += 1) {
    console.log(`Question: ${answers[i]}`);
    const answer = getAnswer('Your answer: ');
    if (answer !== isEvenNumber(answers[i])) {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${isEvenNumber(answers[i])}".`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
};

game();
