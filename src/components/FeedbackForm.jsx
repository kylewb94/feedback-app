import { useState, useContext, useEffect } from 'react'
import RatingSelect from './RatingSelect'
import Card from './Shared/Card'
import Button from './Shared/Button'
import { FaArrowRight } from 'react-icons/fa'
import FeedbackContext from '../context/FeedbackContext'

function FeedbackForm() {
	const [title, setTitle] = useState('How would you rate the service you received?')
	const [rating, setRating] = useState(10)
	const [text, setText] = useState('')
	const [btnDisabled, setBtnDisabled] = useState(true)
	const [message, setMessage] = useState('')

	const { addFeedback, feedbackEdit, updateFeedback } = useContext(FeedbackContext)

	useEffect(() => {
		if (feedbackEdit.edit === true) {
			setTitle('Edit your response')
			setRating(feedbackEdit.item.rating)
			setText(feedbackEdit.item.text)
			setBtnDisabled(false)
		}
	}, [feedbackEdit])

	const handleTextChange = (e) => {
		if (text === '') {
			setBtnDisabled(true)
			setMessage(null)
		} else if (text !== '' && text.trim().length <= 10) {
			setBtnDisabled(true)
			setMessage('Text must be at least 10 characters')
		} else {
			setBtnDisabled(false)
			setMessage('')
		}

		setText(e.target.value)
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		if (text.trim().length > 10) {
			const newFeedback = {
				text,
				rating
			}
			if (feedbackEdit.edit === true) {
				updateFeedback(feedbackEdit.item.id, newFeedback)
				setTitle('How would you rate the service you received?')
			} else {
				addFeedback(newFeedback)
			}
			setText('')
		}
	}

	return (
		<Card>
			<form onSubmit={handleSubmit}>
				<h2>{title}</h2>
				<RatingSelect select={setRating} selected={rating} />
				<div className='input-group'>
					<input
						onChange={handleTextChange}
						type='text'
						placeholder='Tell us what you thought'
						value={text}
					/>
					<Button type='submit' isDisabled={btnDisabled}><FaArrowRight /></Button>
				</div>
				{message && <div className='message'>{message}</div>}
			</form>
		</Card>
	)
}

export default FeedbackForm