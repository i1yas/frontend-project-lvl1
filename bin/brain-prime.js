#!/usr/bin/env node
import { greet, askName } from '../src/cli.js';
import { startPrimeGame } from '../src/games.js';

greet();
const name = askName();
startPrimeGame(name);
