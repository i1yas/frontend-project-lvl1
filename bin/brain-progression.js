#!/usr/bin/env node
import { greet, askName } from '../src/cli.js';
import { startProgressionGame } from '../src/games.js';

greet();
const name = askName();
startProgressionGame(name);
