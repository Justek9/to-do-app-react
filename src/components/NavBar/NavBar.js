import styles from './NavBar.module.scss'

const NavBar = () => {
	return (
		<nav className={styles.nav}>
			<span className='fa fa-tasks'></span>
			<ul className={styles.list}>
				<li>
					<a href='/'>Home</a>
				</li>
				<li>
					<a href='favourite'>Favourite</a>
				</li>
				<li>
					<a href='about'>About</a>
				</li>
			</ul>
		</nav>
	)
}

export default NavBar
