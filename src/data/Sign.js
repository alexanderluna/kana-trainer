const hiragana = [
	{ 'answer': 'ka', 'question': 'か' },
	{ 'answer': 'ki', 'question': 'き' },
	{ 'answer': 'ku', 'question': 'く' },
	{ 'answer': 'ko', 'question': 'こ' },
	{ 'answer': 'sa', 'question': 'さ' },
	{ 'answer': 'shi', 'question': 'し' },
	{ 'answer': 'su', 'question': 'す' },
	{ 'answer': 'so', 'question': 'そ' }
]

const katakana = [
	{ 'answer': 'Ka', 'question': 'か' },
	{ 'answer': 'Ki', 'question': 'き' },
	{ 'answer': 'Ku', 'question': 'く' },
	{ 'answer': 'Ko', 'question': 'こ' },
	{ 'answer': 'Sa', 'question': 'さ' },
	{ 'answer': 'Shi', 'question': 'し' },
	{ 'answer': 'Su', 'question': 'す' },
	{ 'answer': 'So', 'question': 'そ' }
]

const shuffleArray = (arr) => {
	for (let i = 0; i < arr.length; i++) {
		const random = getRandomNumber(hiragana.length)
		arr.push(arr[random])
		arr.splice(random, 1)
	}
	return arr
}

export const getRandomNumber = (maxValue) => {
	return Math.floor(Math.random() * Math.floor(maxValue))
}

export const getQuestion = (userChoice) => {
	const choice = userChoice === 'hiragana' ? hiragana : katakana
	const response = shuffleArray(choice).slice(0,4)
	return {
		options: response.map(item => item.question),
		answers: response.map(item => item.answer)
	}
}
