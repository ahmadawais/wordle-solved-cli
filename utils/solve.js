const wordleWords = require('./list');

function convertDateToIndex(e, a) {
	let s = new Date(e),
		t = new Date(a).setHours(0, 0, 0, 0) - s.setHours(0, 0, 0, 0);
	return Math.floor(t / 864e5);
}

let baseDate = new Date(2021, 5, 19, 0, 0, 0, 0);

function getIndex(todaysDate) {
	return convertDateToIndex(baseDate, todaysDate);
}

function getSolution(today) {
	let a,
		s = getIndex(today);
	return (a = s % wordleWords.length), wordleWords[a];
}

let today = new Date();
let yesterday = new Date().setDate(today.getDate() - 1);
let tomorrow = new Date().setDate(today.getDate() + 1);

const wordToday = getSolution(today).split('');
const wordYesterday = getSolution(yesterday).split('');
const wordTomorrow = getSolution(tomorrow).split('');

module.exports = { wordToday, wordYesterday, wordTomorrow };
