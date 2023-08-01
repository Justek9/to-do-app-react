import { Link, NavLink } from 'react-router-dom'
import styles from './NavBar.module.scss'

const NavBar = () => {
	return (
		<nav className={styles.nav}>
			<span className='fa fa-tasks'></span>
			<ul className={styles.list}>
				<li>
					<NavLink className={({ isActive }) => (isActive ? styles.linkActive : undefined)} to='/'>
						Home
					</NavLink>
				</li>
				<li>
					<NavLink className={({ isActive }) => (isActive ? styles.linkActive : undefined)} to='/favourite'>
						Favourite
					</NavLink>
				</li>

				<li>
					<NavLink className={({ isActive }) => (isActive ? styles.linkActive : undefined)} to='/about'>
						About
					</NavLink>
				</li>
			</ul>
		</nav>
	)
}

export default NavBar
