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
const { wordToday, wordYesterday, wordTomorrow } = require('./utils/solve');

const input = cli.input;
const flags = cli.flags;
const { clear, debug } = flags;

(async () => {
	init({ clear });
	input.includes(`help`) && cli.showHelp(0);

	alert({ type: `success`, msg: wordToday, name: `TODAY` });
	alert({ type: `warning`, msg: wordYesterday, name: `YESTERDAY` });
	alert({ type: `info`, msg: wordTomorrow, name: `TOMORROW` });

	debug && log(flags);
})();
