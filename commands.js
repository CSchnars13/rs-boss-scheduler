import 'dotenv/config';
import { bossChoices } from './static.js';
import { InstallGlobalCommands } from './utils.js';

// Simple test command
const TEST_COMMAND = {
  name: 'test',
  description: 'Basic command',
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

const ALL_COMMANDS = [TEST_COMMAND, SCHEDULE_BOSS_COMMAND];

InstallGlobalCommands(process.env.APP_ID, ALL_COMMANDS);