# Kana Trainer

The original project was a Japanese Quiz Game App I made for iOS called Kana Trainer. It makes learning the Japanese writing system a breeze. I decided to make this mobile web friendly clone.

## Installtion instructions

```bash
git clone git@github.com:Mycroft1891/kana-trainer.git
cd kana-trainer

yarn install
yarn start
```

For firebase deployment: `firebase deploy`

# Documentation

The whole app is single component (Home) react app. The quiz data is stored in a seperate file called `Sign.js` insdide the `data` folder.

The Home component has a number of methods to handle the game logic:

- `incrementScore()` : increment score when answered correctly
- `removeLife()` : removes a life when answered wrongly
- `pickNewQuestion()` : get a new random question
- `resetStats()` : resets score and lifes when lifes are at 0
- `check(answer)` : checks the user chossen answer
- `changeMode(hiragana)` : changes game mode to hiragana/katakana

The Sign class handles the data and returns the required random questions and answers:

- `getQuestion(userChoice)` : get random questions based on game mode
- `shuffleArray()` : shuffles the data array
- `getRandomNumber(maxValue)` : gets a random number smaller than maxValue
