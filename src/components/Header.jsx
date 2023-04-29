import { Link } from "react-router-dom"

function Header() {
	return (
		<header>
			<div className='container'>
				<Link to='/' style={{ textDecoration: "none", color: "#EBEBEB" }}>
					<h2 style={{ textAlign: "center" }}>Customer Service Survey</h2>
				</Link>
			</div>
		</header>
	)
}

export default Header