import 'dotenv/config';
import { getRPSChoices } from './game.js';
import { bossChoices } from './static.js';
import { capitalize, InstallGlobalCommands } from './utils.js';

// Get the game choices from game.js
function createCommandChoices() {
  const choices = getRPSChoices();
  const commandChoices = [];

  for (let choice of choices) {
    commandChoices.push({
      name: capitalize(choice),
      value: choice.toLowerCase(),
    });
  }

  return commandChoices;
}

// Simple test command
const TEST_COMMAND = {
  name: 'test',
  description: 'Basic command',
  type: 1,
};

// Command containing options
const CHALLENGE_COMMAND = {
  name: 'challenge',
  description: 'Challenge to a match of rock paper scissors',
  options: [
    {
      type: 3,
      name: 'object',
      description: 'Pick your object',
      required: true,
      choices: createCommandChoices(),
    },
  ],
  type: 1,
};

const SCHEDULE_BOSS_COMMAND = {
  name: 'schedule',
  description: 'Schedule a boss event at a certain time in the future',
  options: [
    {
      type: 3,
      name: 'boss',
      description: 'Boss name',
      required: true,
      choices: bossChoices
    },
    {
      type: 3,
      name: 'date',
      description: 'Date to schedule the boss event',
      required: true
    },
    {
      type: 3,
      name: 'time',
      description: 'Time to schedule the boss event',
      required: true
    },
  ],
  type: 1
}

const ALL_COMMANDS = [TEST_COMMAND, CHALLENGE_COMMAND, SCHEDULE_BOSS_COMMAND];

InstallGlobalCommands(process.env.APP_ID, ALL_COMMANDS);