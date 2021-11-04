#!/usr/bin/env node
import { greet, askName } from '../src/cli.js';
import { startGcdGame } from '../src/games.js';

greet();
const name = askName();
startGcdGame(name);
