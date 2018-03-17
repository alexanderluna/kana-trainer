const hiragana = [
	{ 'answer': 'ka', 'question': 'か' },
	{ 'answer': 'ki', 'question': 'き' },
	{ 'answer': 'ku', 'question': 'く' },
	{ 'answer': 'ke', 'question': 'け' },
	{ 'answer': 'ko', 'question': 'こ' },
	{ 'answer': 'sa', 'question': 'さ' },
	{ 'answer': 'shi', 'question': 'し' },
	{ 'answer': 'su', 'question': 'す' },
	{ 'answer': 'se', 'question': 'せ' },
	{ 'answer': 'so', 'question': 'そ' },
	{ 'answer': 'ta', 'question': 'た' },
	{ 'answer': 'chi', 'question': 'ち' },
	{ 'answer': 'tsu', 'question': 'つ' },
	{ 'answer': 'te', 'question': 'て' },
	{ 'answer': 'to', 'question': 'と' },
	{ 'answer': 'ha', 'question': 'は' },
	{ 'answer': 'hi', 'question': 'ひ' },
	{ 'answer': 'hu', 'question': 'ふ' },
	{ 'answer': 'he', 'question': 'へ' },
	{ 'answer': 'ho', 'question': 'ほ' },
	{ 'answer': 'ma', 'question': 'ま' },
	{ 'answer': 'mi', 'question': 'み' },
	{ 'answer': 'mu', 'question': 'む' },
	{ 'answer': 'me', 'question': 'め' },
	{ 'answer': 'mo', 'question': 'も' },
	{ 'answer': 'ra', 'question': 'ら' },
	{ 'answer': 'ri', 'question': 'り' },
	{ 'answer': 'ru', 'question': 'る' },
	{ 'answer': 're', 'question': 'れ' },
	{ 'answer': 'ro', 'question': 'ろ' },
	{ 'answer': 'a', 'question': 'あ' },
	{ 'answer': 'i', 'question': 'い' },
	{ 'answer': 'u', 'question': 'う' },
	{ 'answer': 'e', 'question': 'え' },
	{ 'answer': 'o', 'question': 'お' },
	{ 'answer': 'ya', 'question': 'や' },
	{ 'answer': 'yu', 'question': 'ゆ' },
	{ 'answer': 'yo', 'question': 'よ' },
	{ 'answer': 'wa', 'question': 'わ' },
	{ 'answer': 'wo', 'question': 'を' },
	{ 'answer': 'n', 'question': 'ん' },
]

const katakana = [
	{ 'answer': 'ka', 'question': 'カ' },
	{ 'answer': 'ki', 'question': 'キ' },
	{ 'answer': 'ku', 'question': 'ク' },
	{ 'answer': 'ke', 'question': 'ケ' },
	{ 'answer': 'ko', 'question': 'コ' },
	{ 'answer': 'sa', 'question': 'サ' },
	{ 'answer': 'shi', 'question': 'シ' },
	{ 'answer': 'su', 'question': 'ス' },
	{ 'answer': 'se', 'question': 'セ' },
	{ 'answer': 'so', 'question': 'ソ' },
	{ 'answer': 'ta', 'question': 'タ' },
	{ 'answer': 'chi', 'question': 'チ' },
	{ 'answer': 'tsu', 'question': 'ツ' },
	{ 'answer': 'te', 'question': 'テ' },
	{ 'answer': 'to', 'question': 'ト' },
	{ 'answer': 'ha', 'question': 'ハ' },
	{ 'answer': 'hi', 'question': 'ヒ' },
	{ 'answer': 'hu', 'question': 'フ' },
	{ 'answer': 'he', 'question': 'ヘ' },
	{ 'answer': 'ho', 'question': 'ホ' },
	{ 'answer': 'ma', 'question': 'マ' },
	{ 'answer': 'mi', 'question': 'ミ' },
	{ 'answer': 'mu', 'question': 'ム' },
	{ 'answer': 'me', 'question': 'メ' },
	{ 'answer': 'mo', 'question': 'モ' },
	{ 'answer': 'ra', 'question': 'ラ' },
	{ 'answer': 'ri', 'question': 'リ' },
	{ 'answer': 'ru', 'question': 'ル' },
	{ 'answer': 're', 'question': 'レ' },
	{ 'answer': 'ro', 'question': 'ロ' },
	{ 'answer': 'a', 'question': 'ア' },
	{ 'answer': 'i', 'question': 'イ' },
	{ 'answer': 'u', 'question': 'ウ' },
	{ 'answer': 'e', 'question': 'エ' },
	{ 'answer': 'o', 'question': 'オ' },
	{ 'answer': 'ya', 'question': 'ヤ' },
	{ 'answer': 'yu', 'question': 'ユ' },
	{ 'answer': 'yo', 'question': 'ヨ' },
	{ 'answer': 'wa', 'question': 'ワ' },
	{ 'answer': 'wo', 'question': 'ヲ' },
	{ 'answer': 'n', 'question': 'ン' },
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
