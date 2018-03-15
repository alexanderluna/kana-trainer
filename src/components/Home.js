import React, { Component } from 'react';
import { getQuestion, getRandomNumber } from '../data/Sign';
import '../App.css';

class Home extends Component {
	constructor(props) {
		super(props)
		this.state = {
			answer: 1,
			userChoice: 'hiragana',
			lives: 5,
			options: ['1','2','3','4'],
			question: '1',
			score: 0
		}
	}

	incrementScore() {
		this.setState(prev => ({score: prev.score + 1}))
	}

	removeLife() {
		this.setState(prev => ({lives: prev.lives - 1}))
	}

	pickNewQuestion() {
		const response = getQuestion(this.state.userChoice)
		let randomInt = getRandomNumber(4)
		this.setState({
			options: response.options,
			question: response.answers[randomInt],
			answer: randomInt
		})
	}

	check(choice) {
		const { options, answer } = this.state
		choice === options[answer] ? this.incrementScore() : this.removeLife()
		this.pickNewQuestion()
	}

	render() {
		const { score, lives, question, options, hiragana } = this.state
		return(
			<div className="card">
				<h2>Score: {score}</h2>
				<h2>Lifes: {lives}</h2>
				<h2 className="display">{question}</h2>
				<h3>{hiragana ? 'Translate Hiragana' : 'Translate Katakana'}</h3>
				<div className="buttonGroup">
				{options.map((choice, id) =>
					<button key={id} onClick={event => this.check(choice)}>{choice}</button>
				)}
				</div>
				<h3>Choose what to learn</h3>
				<button className="option" onClick={event => this.changeMode(true)}>Hiragana</button>
				<button className="option" onClick={event => this.changeMode(false)}>Katakana</button>
			</div>
		)
	}
}

export default Home
