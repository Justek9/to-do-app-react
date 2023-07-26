import { useState } from 'react'
import { useDispatch } from 'react-redux'
import Button from '../Button/Button'
import TextInput from '../TextInput/TextInput'
import styles from './ColumnForm.module.scss'

const ColumnForm = () => {
	const dispatch = useDispatch()

	const [title, setTitle] = useState('')
	const [icon, setIcon] = useState('')

	const handleSubmit = e => {
		e.preventDefault()
		dispatch({ type: 'ADD_COLUMN', payload: { newColumn: { title, icon } } })
		setTitle('')
		setIcon('')
	}

	return (
		<form onSubmit={handleSubmit} className={styles.columnForm}>
			<label>Title:</label>
			<TextInput value={title} onChange={e => setTitle(e.target.value)}></TextInput>
			<label>Icon:</label>
			<TextInput value={icon} onChange={e => setIcon(e.target.value)}></TextInput>
			<Button type='submit'>Add column</Button>
		</form>
	)
}

export default ColumnForm
