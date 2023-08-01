import { useState } from 'react'
import { useDispatch } from 'react-redux'
import Button from '../Button/Button'
import TextInput from '../TextInput/TextInput'
import { addList } from '../../redux/store'
import styles from './ListForm.module.scss'

const ListForm = () => {
	const dispatch = useDispatch()

	const [title, setTitle] = useState('')
	const [description, setDescription] = useState('')

	const handleSubmit = e => {
		e.preventDefault()
		dispatch(addList({ newList: { title, description } }))
		setTitle('')
		setDescription('')
	}

	return (
		<form onSubmit={handleSubmit} className={styles.listForm}>
			<label>Title:</label>
			<TextInput value={title} onChange={e => setTitle(e.target.value)}></TextInput>
			<label>Descripption:</label>
			<TextInput value={description} onChange={e => setDescription(e.target.value)}></TextInput>
			<Button type='submit'>Add list</Button>
		</form>
	)
}

export default ListForm
