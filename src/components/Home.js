import React, { Component } from 'react';
import { getQuestion, getRandomNumber } from '../data/Sign';
import '../App.css';

class Home extends Component {
	constructor(props) {
		super(props)
		this.state = {
			answer: 1,
			userChoice: 'hiragana',
			lifes: 5,
			options: ['か','き','く','け'],
			question: 'ki',
			score: 0
		}
	}

	incrementScore() {
		this.setState(prev => ({score: prev.score + 1}))
	}

	removeLife() {
		this.setState(prev => ({lifes: prev.lifes - 1}))
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

	resetStats() {
		this.setState({score: 0, lifes: 5})
	}

	check(choice) {
		const { options, answer, lifes } = this.state
		choice === options[answer] ? this.incrementScore() : this.removeLife()
		this.pickNewQuestion()
		if(lifes === 0) this.resetStats()
	}

	changeMode(hiragana) {
		const mode = hiragana ? 'hiragana' : 'katakana'
		if(this.state.userChoice === mode) return
		this.setState({userChoice: mode}, () => this.pickNewQuestion())
	}

	render() {
		const { score, lifes, question, options, hiragana } = this.state
		return(
			<div className="card">
				<h2>Score: {score}</h2>
				<h2>Lifes: {lifes}</h2>
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
