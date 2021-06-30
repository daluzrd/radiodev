import { useContext, useEffect, useRef } from 'react'
import { AudioContext } from '../contexts/audio'
import styled from 'styled-components'
import Main from '../components/Main'
import Sidebar from '../components/Sidebar'

const App = styled.div`
	display: flex;
	width: 100vw;
`

export const Home = () => {
	return (
		<App>
			<Main />
			<Sidebar />
		</App>
	)
}
