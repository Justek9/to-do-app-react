import { useSelector } from 'react-redux'
import { getFavoriteCards } from '../../redux/store'
import { Navigate } from 'react-router-dom'
import PageTitle from '../PageTitle/PageTitle'
import Card from '../Card/Card'
import styles from './Favourite.module.scss'

const Favourite = () => {
	const favCards = useSelector(state => getFavoriteCards(state))
	if (!favCards.length) return <Navigate to='/' />

	return (
		<div className={styles.cont}>
			<PageTitle>Favourite</PageTitle>
			<article className={styles.column}>
				<ul className={styles.cards}>
					{favCards.map(card => (
						<Card key={card.id} isFavorite={card.isFavorite}>
							{card.title}
						</Card>
					))}
				</ul>
			</article>
		</div>
	)
}

export default Favourite
