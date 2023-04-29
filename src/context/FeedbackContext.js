import { v4 as uuidv4 } from 'uuid'
import { createContext, useState } from 'react'

const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {
	const [feedback, setFeedback] = useState([
		{
			id: 1,
			text: 'Hold service needs improvement.',
			rating: 6
		},
		{
			id: 2,
			text: 'Excellent service, but products are average quality.',
			rating: 9
		},
		{
			id: 3,
			text: 'Spoke with 3 different specialists and got 3 different answers.',
			rating: 2
		}
	])
	const [feedbackEdit, setFeedbackEdit] = useState({
		item: {},
		edit: false
	})

	// Add feedback
	const addFeedback = (newFeedback) => {
		newFeedback.id = uuidv4()
		setFeedback([newFeedback, ...feedback])
	}

	// Edit feedback
	const editFeedback = (item) => {
		setFeedbackEdit({
			item,
			edit: true
		})
	}

	// Update feedback
	const updateFeedback = (id, updItem) => {
		setFeedback(feedback.map((item) => item.id === id
			? { ...item, ...updItem }
			: item
		))

		setFeedbackEdit({
			item: {},
			edit: false,
		})
	}

	// Delete feedback
	const deleteFeedback = (id) => {
		if (window.confirm('Are you sure you want to delete?')) {
			setFeedback(feedback.filter((item) => item.id !== id))
		}
	}

	return (
		<FeedbackContext.Provider value={{
			feedback,
			feedbackEdit,
			addFeedback,
			editFeedback,
			updateFeedback,
			deleteFeedback
		}}>
			{children}
		</FeedbackContext.Provider>
	)
}

export default FeedbackContext