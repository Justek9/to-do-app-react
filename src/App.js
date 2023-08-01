import Container from './components/Container/Container'
import Home from './components/Home/Home'
import About from './components/About/About'
import Favourite from './components/Favourite/Favourite'
import NavBar from './components/NavBar/NavBar'

const App = () => {
	return (
		<main>
			<NavBar />
			<Container>
				<Home />
				<About />
				<Favourite />
			</Container>
		</main>
	)
}

export default App
