const wordList = require('./list');

function getDateDifference(e, a) {
	let s = new Date(e),
		t = new Date(a).setHours(0, 0, 0, 0) - s.setHours(0, 0, 0, 0);
	return Math.floor(t / 864e5);
}

let baseDate = new Date(2021, 5, 19, 0, 0, 0, 0);

function callGetDateDifference(todaysDate) {
	return getDateDifference(baseDate, todaysDate);
}

function getWordOfTheDay(today) {
	let a,
		s = callGetDateDifference(today);
	return (a = s % wordList.length), wordList[a];
}

let today = new Date();
let yesterday = new Date().setDate(today.getDate() - 1);
let tomorrow = new Date().setDate(today.getDate() + 1);

const wordToday = getWordOfTheDay(today).split('');
const wordYesterday = getWordOfTheDay(yesterday).split('');
const wordTomorrow = getWordOfTheDay(tomorrow).split('');

module.exports = { wordToday, wordYesterday, wordTomorrow };
