#!/usr/bin/env node
import { greet, askName } from '../src/cli.js';
import { startGame } from '../src/even-game.js';

greet();
const name = askName();
startGame(name);
