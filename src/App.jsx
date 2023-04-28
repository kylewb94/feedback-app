import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import FeedbackForm from './components/FeedbackForm'
import FeedbackStats from './components/FeedbackStats'
import FeedbackList from './components/FeedbackList'
import AboutLink from './components/AboutLink'
import AboutPage from './pages/AboutPage'
import { FeedbackProvider } from './context/FeedbackContext'

function App() {
	return (
		<FeedbackProvider>
			<Router>
				<Header />
				<div className='container'>
					<Routes>
						<Route exact path='/' element={
							<>
								<FeedbackForm />
								<FeedbackStats />
								<FeedbackList />
							</>
						}>
						</Route>

						<Route path='/about' element={<AboutPage />}>About</Route>
					</Routes>
					<AboutLink />
				</div>
			</Router>
		</FeedbackProvider>
	)
}

export default App