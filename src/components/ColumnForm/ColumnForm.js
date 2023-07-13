import { useState } from 'react'
import Button from '../Button/Button'
import TextInput from '../TextInput/TextInput'
import styles from './ColumnForm.module.scss'

const ColumnForm = props => {
	const [title, setTitle] = useState('')
	const [icon, setIcon] = useState('')
	const handleSubmit = e => {
		e.preventDefault()
		props.action({ title: title, icon: icon })
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
