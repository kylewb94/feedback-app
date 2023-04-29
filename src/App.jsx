import Header from './components/Header'
import FeedbackForm from './components/FeedbackForm'
import FeedbackStats from './components/FeedbackStats'
import FeedbackList from './components/FeedbackList'
import AboutLink from './components/AboutLink'
import { FeedbackProvider } from './context/FeedbackContext'

function App() {
	return (
		<FeedbackProvider>
			<div className='container'>
				<Header />
				<FeedbackForm />
				<FeedbackStats />
				<FeedbackList />
				<AboutLink />
			</div>
		</FeedbackProvider>
	)
}

export default App