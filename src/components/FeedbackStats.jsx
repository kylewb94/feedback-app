import { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'

function FeedbackStats() {
	const { feedback } = useContext(FeedbackContext)

	// Calculate ratings avg
	const average = Math.round(
		feedback.reduce((acc, { rating }) => acc + rating, 0) / feedback.length
	)

	return (
		<div className='feedback-stats'>
			<p>{feedback.length} Reviews</p>
			<p>Average Rating: {isNaN(average) ? 0 : average}</p>
		</div>
	)
}

export default FeedbackStats
