import { useDispatch } from 'react-redux'
import { toggleCardFavorite, deleteCard } from '../../redux/cardReducer'
import clsx from 'clsx'
import styles from './Card.module.scss'

const Card = props => {
	const dispatch = useDispatch()

	const handleClickFav = e => {
		e.preventDefault()
		dispatch(toggleCardFavorite(props.id))
	}

	const handleClickDelete = e => {
		e.preventDefault()
		dispatch(deleteCard(props.id))
	}

	return (
		<li className={styles.card}>
			{props.children}
			<div>
				<button
					className={clsx('fa fa-star-o', styles.btnIcons, props.isFavorite && styles.active)}
					onClick={handleClickFav}></button>
				<button className={clsx('fa fa-trash', styles.btnIcons)} onClick={handleClickDelete}></button>
			</div>
		</li>
	)
}

export default Card
