#!/usr/bin/env node
import { greet, askName } from '../src/cli.js';
import { startCalcGame } from '../src/games.js';

greet();
const name = askName();
startCalcGame(name);
