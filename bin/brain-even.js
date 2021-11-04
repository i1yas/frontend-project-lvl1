#!/usr/bin/env node
import { greet, askName } from '../src/cli.js';
import { startEvenGame } from '../src/games.js';

greet();
const name = askName();
startEvenGame(name);
