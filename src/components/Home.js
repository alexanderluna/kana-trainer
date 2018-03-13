import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardTitle} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

class Home extends Component {
	constructor(props) {
		super(props)
		this.state = {
			answer: '1',
			hiragana: true,
			lives: 5,
			options: ['1','2','3','4'],
			question: '1',
			score: 0
		}
	}

	componentWillMount() {
		this.setState({
			options: ['1','2','3','4'],
			answer: '1'
		})
	}

	getTitle() {
		return this.props.hiragana
		? 'Translate Hiragana to Romaji'
		: 'Translate Katakana to Romaji'
	}

	getScore() {
		return `Score: ${this.state.score}`
	}

	checkAnswer() {
		this.setState(prev => {
			score: prev.score + 1
		})
	}

	render() {
		return(
			<div>
				<Card className="card">
					<CardHeader
						title={this.getScore()}
						avatar="images/jsa-128.jpg"
					/>
					<CardTitle
						title={this.state.question}
						subtitle={this.getTitle()}
						className="game-display"
					/>
					<CardActions>
						{ this.state.options.map((option, id) =>
							<FlatButton
								key={id}
								label={option}
								onClick={this.checkAnswer()}
							/>
						)}
					</CardActions>
				</Card>
			</div>
		)
	}
}

export default Home
