import { useContext, useEffect, useRef } from 'react'
import { AudioContext } from '../contexts/audio'
import styled from 'styled-components'
import Main from '../components/Main'
import Player from '../components/Player'
import Sidebar from '../components/Sidebar'

const App = styled.div`
	display: flex;
	width: 100vw;
`

export const Home = () => {
	const audioPlayer = useRef<HTMLAudioElement>(null)
	const { isPlaying } = useContext(AudioContext)

	useEffect(() => {
		if(audioPlayer.current && isPlaying){
			audioPlayer.current.play()
		} else if (audioPlayer.current) {
			audioPlayer.current.pause()
		}
	})

	return (
		<App>
			<Main />
			<Sidebar />
			<Player />
			<audio 
				ref={audioPlayer}
				src={`${process.env.PUBLIC_URL}/musics/Quadro1.mp3`}
			/>
		</App>
	)
}
