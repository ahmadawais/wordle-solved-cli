#!/usr/bin/env node

/**
 * wordle-solved-cli
 * CLI to to solve your Wordle puzzle daily
 *
 * @author Ahmad Awais <https://twitter.com/MrAhmadAwais/>
 */

const alert = require('cli-alerts');

const init = require('./utils/init');
const cli = require('./utils/cli');
const log = require('./utils/log');
const print = require('./utils/print');
const { wordToday, wordYesterday, wordTomorrow } = require('./utils/solve');

const input = cli.input;
const flags = cli.flags;
const { clear, debug } = flags;

(async () => {
	init({ clear });
	input.includes(`help`) && cli.showHelp(0);

	print({ title: `TODAY`, word: wordToday });
	print({ title: `YESTERDAY`, word: wordYesterday });
	print({ title: `TOMORROW`, word: wordTomorrow });

	debug && log(flags);
})();
