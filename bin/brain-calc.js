#!/usr/bin/env node
import { greet, askName } from '../src/cli.js';
import { startGame } from '../src/calc-game.js';

greet();
const name = askName();
startGame(name);
