import { useDispatch } from 'react-redux'
import { toggleCardFavorite } from '../../redux/cardReducer'
import clsx from 'clsx'
import styles from './Card.module.scss'

const Card = (props) => {
	const dispatch = useDispatch()

	const handleClickFav = e => {
		e.preventDefault()
		dispatch(toggleCardFavorite(props.id))
	}

	return (
		<li className={styles.card}>
			{props.children}
			<button
				className={clsx('fa fa-star-o', styles.btnIcons, props.isFavorite && styles.active)}
				onClick={handleClickFav}></button>
		</li>
	)
}

export default Card
