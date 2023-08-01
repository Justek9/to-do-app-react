import Hero from './components/Hero/Hero'
import SearchForm from './components/SearchForm/SearchForm'
import List from './components/List/List'
import Container from './components/Container/Container'
import NavBar from './components/NavBar/NavBar'
import Favourite from './components/Favorite/Favourite'
import About from './components/About/About'

const App = () => {
	return (
		<div>
			<NavBar />
			<Container>
				<Hero />
				<SearchForm />
				<List />
			</Container>
		</div>
	)
}

export default App
