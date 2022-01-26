const sym = require('log-symbols');
const chalk = require('chalk');
const green = chalk.green;
const greenI = chalk.green.inverse;
const yellowI = chalk.yellow.inverse;
const grayI = chalk.gray.inverse;

const space = word => ` ${word.toUpperCase()} `;

module.exports = ({ title, word }) => {
	if (title === `TODAY`) {
		console.log(
			`${greenI(space(`W`))} ${grayI(space(`O`))} ${grayI(
				space(`R`)
			)} ${yellowI(space(`D`))} ${grayI(space(`L`))} ${grayI(space(`E`))}`
		);
	}
	console.log(`\n${sym.success} ${title}\n`);
	console.log(
		` ${greenI(space(word[0]))} ${greenI(space(word[1]))} ${greenI(
			space(word[2])
		)} ${greenI(space(word[3]))} ${greenI(space(word[4]))} `
	);
	console.log();
};
