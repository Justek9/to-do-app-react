import { useState } from 'react'
import TextInput from '../TextInput/TextInput'
import Button from '../Button/Button'
import styles from './CardForm.module.scss'

const CardForm = props => {
	const [title, setCardTitle] = useState('')

	function handleSubmit(e) {
		e.preventDefault()
		props.action({ title: title }, props.columnId)
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
