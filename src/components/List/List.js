import { getColumnsByList, getListById } from '../../redux/store'
import { useParams } from 'react-router'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import Column from '../Column/Column'
import ColumnForm from '../ColumnForm/ColumnForm'
import SearchForm from '../SearchForm/SearchForm'
import styles from './List.module.scss'

const List = () => {
	const { listId } = useParams()
	const columns = useSelector(state => getColumnsByList(state, listId))
	const listData = useSelector(state => getListById(state, listId))

	if (!listData) return <Navigate to='/' />

	return (
		<div className={styles.list}>
			<header className={styles.header}>
				<h1 className={styles.title}>
					{listData[0].title}
					<span>soon</span>
				</h1>
			</header>
			<p className={styles.description}>{listData[0].description}</p>
			<SearchForm />

			<section className={styles.columns}>
				{columns.map(column => (
					<Column key={column.id} {...column} />
				))}
			</section>
			<ColumnForm />
		</div>
	)
}

export default List
