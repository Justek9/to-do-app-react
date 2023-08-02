import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router'
import Button from '../Button/Button'
import TextInput from '../TextInput/TextInput'
import { addColumn } from '../../redux/columnsReducer'
import styles from './ColumnForm.module.scss'

const ColumnForm = () => {
	const dispatch = useDispatch()
	const { listId } = useParams()

	const [title, setTitle] = useState('')
	const [icon, setIcon] = useState('')

	const handleSubmit = e => {
		e.preventDefault()
		dispatch(addColumn({ newColumn: { title, icon, listId: listId } }))
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
