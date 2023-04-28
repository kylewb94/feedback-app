import { FaTimes, FaEdit } from 'react-icons/fa'
import { useContext } from 'react'
import PropTypes from 'prop-types'
import Card from './Shared/Card'
import FeedbackContext from '../context/FeedbackContext'

function FeedbackItem({ item }) {
	const { editFeedback, deleteFeedback } = useContext(FeedbackContext)

	return (
		<Card>
			<div className='num-display'>{item.rating}</div>
			<button onClick={() => editFeedback(item)} className='edit'>
				<FaEdit color='#131313' />
			</button>
			<button onClick={() => deleteFeedback(item.id)} className='close'>
				<FaTimes color='#131313' />
			</button>
			<div className='text-display'>{item.text}</div>
		</Card>
	)
}

FeedbackItem.propTypes = {
	item: PropTypes.object.isRequired,
}

export default FeedbackItem