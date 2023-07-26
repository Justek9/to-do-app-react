import { useSelector } from 'react-redux'

import Card from '../Card/Card'
import CardForm from '../CardForm/CardForm'
import styles from './Column.module.scss'

const Column = props => {
	const phrase = useSelector(state => state.filterPhrase)

	const cards = useSelector(state =>
		state.cards.filter(card => card.columnId === props.id && card.title.toLowerCase().includes(phrase.toLowerCase()))
	)

	return (
		<article className={styles.column}>
			<h2 className={styles.title}>
				<span className={styles.icon + ' fa fa-' + props.icon}></span>
				{props.title}
			</h2>
			<ul className={styles.cards}>
				{cards.map(card => (
					<Card key={card.id}>{card.title}</Card>
				))}
			</ul>
			<CardForm columnId={props.id} />
		</article>
	)
}

export default Column
