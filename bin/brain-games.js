#!/usr/bin/env node
import askName from '../src/cli.js';

const greeating = () => {
  console.log('Welcome to the Brain Games!');
  askName();
};

greeating();

export default greeating;
