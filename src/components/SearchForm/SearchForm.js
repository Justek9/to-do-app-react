import { useState } from 'react'
import { useDispatch } from 'react-redux'
import TextInput from '../TextInput/TextInput'
import Button from '../Button/Button'
import styles from './SearchForm.module.scss'

const SearchForm = () => {
	const [phrase, setPhrase] = useState('')
	const dispatch = useDispatch()

	const handleSearch = e => {
		e.preventDefault()
		dispatch({ type: 'SEARCH', payload: phrase })
		setPhrase('')
	}

	return (
		<form className={styles.searchForm} onSubmit={handleSearch}>
			<TextInput value={phrase} onChange={e => setPhrase(e.target.value)} placeholder='Search...' />
			<Button>
				<span className='fa fa-search' />
			</Button>
		</form>
	)
}

export default SearchForm
