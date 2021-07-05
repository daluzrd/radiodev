import styled from 'styled-components'
import Main from '../components/Main'
import Sidebar from '../components/Sidebar'
import Player from '../components/Player'

const App = styled.div`
	display: flex;
	width: 100vw;
`

export const Home = () => {

	return (
		<App>
			<Main />
			<Sidebar />
			<Player />
		</App>
	)
}
