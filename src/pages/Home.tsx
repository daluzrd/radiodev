import styled from 'styled-components'
import Main from '../components/Main'
import Player from '../components/Player'
import Sidebar from '../components/Sidebar'

const App = styled.div`
	display: flex;
	width: 100vw;
`

const Iframe = styled.iframe`
	display: none;
`

export const Home = () => {
	return (
		<App>
			<Main />
			<Sidebar />
			<Player />
			<Iframe
				width='100%'
				height='300'
				scrolling='no'
				frameBorder='no'
				allow='autoplay'
				src='https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/842143886&color=%2366644c&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true'
			/>
		</App>
	)
}
