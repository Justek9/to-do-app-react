import { useState } from 'react'
import { useDispatch } from 'react-redux'
import TextInput from '../TextInput/TextInput'
import Button from '../Button/Button'
import styles from './CardForm.module.scss'

const CardForm = ({ columnId }) => {
	const [title, setCardTitle] = useState('')

	const dispatch = useDispatch()

	function handleSubmit(e) {
		e.preventDefault()
		console.log(e.target)
		dispatch({ type: 'ADD_CARD', payload: { newCard: { title, columnId: columnId } } })
		setCardTitle('')
	}

	return (
		<form onSubmit={handleSubmit} className={styles.cardForm}>
			<TextInput value={title} onChange={e => setCardTitle(e.target.value)}></TextInput>
			<Button type='submit'>Add card</Button>
		</form>
	)
}

export default CardForm
