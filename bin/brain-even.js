#!/usr/bin/env node
import console from 'console';
import { askName } from '../src/cli.js';
import { startGame } from '../src/even-game.js';

console.log('Welcome to the Brain Games!');

const name = askName();

startGame(name);
