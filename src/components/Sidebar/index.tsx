import {
	MdEqualizer,
	MdHome,
	MdLibraryMusic,
	MdMoreHoriz,
	MdSearch,
} from 'react-icons/md'
import LoginPhoto from '../../assets/img/MMPR (2).jpg'
import StationIcon from '../../assets/img/stationIcon.jpeg'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Sidebar = styled.aside`
	position: fixed;
	right: 0;
	background: var(--black);

	height: calc(100vh - 7.5rem);
	width: 18rem;
	padding: 1rem;

	display: flex;
	flex-direction: column;
	justify-content: space-between;

	> section {
		padding: 0.5rem;
		height: 50%;

		display: flex;
		flex-direction: column;
		justify-content: flex-start;
	}
`

const UserSection = styled.section`
	display: flex;
	justify-content: space-between;
	align-items: center;

	font-weight: bold;
	color: var(--light-gray);

	> section {
		> a {
			color: var(--light-gray);
			text-decoration: none;
		}
	}
`

const UserDataSection = styled.section`
	display: flex;
	align-items: center;
	gap: 1rem;
`

const UserName = styled(Link)`
	transition: 200ms;

	:hover {
		transform: scale(1.1);
	}
`

const PerfilIcon = styled.img`
	width: 3rem;
	height: 3rem;

	border-radius: 1.5rem;
`

const EllipsisIcon = styled(MdMoreHoriz)`
	cursor: pointer;

	width: 2rem;
	height: 2rem;

	transition: 200ms;

	:hover {
		transform: scale(1.1);
	}
`

const Nav = styled.nav`
	display: flex;
	flex-direction: column;
	gap: 1rem;
	margin-top: 2rem;
`

const NavItem = styled(Link)`
	display: flex;
	align-items: center;

	text-decoration: none;
	color: var(--light-gray);

	transition: 200ms;

	> p {
		font-weight: bold;
		margin-left: 1rem;
	}

	.icon {
		width: 2rem;
		height: 2rem;
	}

	:hover {
		transform: scale(1.1);
	}
`

const QuickStationsSection = styled.section`
	display: flex;
	flex-direction: column;
	gap: 1rem;

	color: var(--light-gray);

	> span {
		font-weight: bold;
		line-height: 1.5rem;
		border-bottom: solid 1px var(--dark-gray);
	}
`

const QuickStationsList = styled.ul`
	display: flex;
	flex-direction: column;
	gap: 1rem;

	height: 100%;
`

const QuickStationIcon = styled.img`
	width: 2rem;
	height: 2rem;
`

const QuickStation = styled(Link)`
	display: flex;
	align-items: center;
	gap: 1rem;

	color: var(--light-gray);

	transition: 200ms;

	:hover {
		transform: scale(1.1);
	}
`

export default () => {
	return (
		<Sidebar>
			<section>
				<UserSection>
					<UserDataSection>
						<PerfilIcon src={LoginPhoto} alt='Foto de perfil' />
						<UserName to='#'>Lucas da Luz</UserName>
					</UserDataSection>
					<EllipsisIcon />
				</UserSection>
				<Nav>
					<NavItem to='#'>
						<MdHome className='icon' />
						<p>Home</p>
					</NavItem>
					<NavItem to='#'>
						<MdSearch className='icon' />
						<p>Search</p>
					</NavItem>
					<NavItem to='#'>
						<MdLibraryMusic className='icon' />
						<p>Liked Stations</p>
					</NavItem>
					<NavItem to='#'>
						<MdEqualizer className='icon' />
						<p>Your Rooms</p>
					</NavItem>
				</Nav>
			</section>
			<QuickStationsSection>
				<span>Quick Stations</span>
				<QuickStationsList>
					<li>
						<QuickStation to='#'>
							<QuickStationIcon src={StationIcon} />
							<p>Station 1</p>
						</QuickStation>
					</li>
					<li>
						<QuickStation to='#'>
							<QuickStationIcon src={StationIcon} />
							<p>Station 2</p>
						</QuickStation>
					</li>
					<li>
						<QuickStation to='#'>
							<QuickStationIcon src={StationIcon} />
							<p>Station 3</p>
						</QuickStation>
					</li>
					<li>
						<QuickStation to='#'>
							<QuickStationIcon src={StationIcon} />
							<p>Station 4</p>
						</QuickStation>
					</li>
					<li>
						<QuickStation to='#'>
							<QuickStationIcon src={StationIcon} />
							<p>Station 5</p>
						</QuickStation>
					</li>
				</QuickStationsList>
			</QuickStationsSection>
		</Sidebar>
	)
}
