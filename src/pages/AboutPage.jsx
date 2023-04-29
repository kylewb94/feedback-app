import Card from '../components/Shared/Card'
import { Link } from 'react-router-dom'
import { FaRegArrowAltCircleRight } from 'react-icons/fa'

function AboutPage() {
	return (
		<Card>
			<div className='about'>
				<h1>About</h1>
				<p>Customer Service Survey is a simple React app that allows users to add, update, and delete their feedback. It utilizes the following fundamentals of React:</p>
				<ul className='bullets'>
					<li>JSX</li>
					<li>Props (proptypes, defaultprops, etc)</li>
					<li>State (Component and App level)</li>
					<li>React Router</li>
					<li>Forms</li>
					<li>Context API</li>
				</ul>
				<hr style={{ margin: '1.5rem 0' }} />
				<p>View the source code on <a href='https://github.com/kylewb94/feedback-app' target='_blank' rel='noopener noreferrer'>Github</a></p>
				<p>Site by <a href='https://kylebarnes.me/' target='_blank' rel='noopener noreferrer'>Kyle Barnes</a></p>
				<p style={{ marginTop: '3rem', textAlign: 'right' }} >
					<Link to='/'>
						Back{' '}<FaRegArrowAltCircleRight />
					</Link>
				</p>
			</div>
		</Card>
	)
}

export default AboutPage