import PageTitle from '../PageTitle/PageTitle'
import styles from './Hero.module.scss'

const Hero = () => {
	return (
		<div className='hero'>
			<PageTitle>My first React App</PageTitle>
			<p className='subtitle'>A simple to-do app, with lists, columns and card</p>
		</div>
	)
}

export default Hero
