import { createContext, ReactNode, useEffect, useState } from 'react'
import { music } from '../models/music'
import { playlist } from '../models/playlist'
import {
	getMusicsByPlaylistId,
	getPlaylists,
	getTop4Playlists,
	updatePlaylistPlayedTimes,
} from '../services/jsonServer'
import { shuffleMusics } from '../utils/shuffleMusics'

type AudioContextType = {
	isPlaying: boolean
	actualMusic: music
	actualPlaylist: playlist
	playlists: playlist[]
	quickPlaylists: playlist[]
	play: () => void
	listenPlaylist: (playlist: playlist) => void
}

type AudioContextProviderType = {
	children: ReactNode
}

export const AudioContext = createContext({} as AudioContextType)

export const AudioContextProvider = ({
	children,
}: AudioContextProviderType) => {
	const [playlists, setPlaylists] = useState<playlist[]>([])
	const [quickPlaylists, setQuickPlaylists] = useState([] as playlist[])
	const [isPlaying, setIsPlaying] = useState(false)
	const [musics, setMusics] = useState<music[]>([])
	const [actualMusic, setActualMusic] = useState({} as music)
	const [actualPlaylist, setActualPlaylist] = useState({} as playlist)

	const play = () => setIsPlaying(!isPlaying)

	const listenPlaylist = async (playlist: playlist) => {
		setActualPlaylist(playlist)
		setMusics(await getMusicsByPlaylistId(playlist.id))
	}

	const nextTrack = (index: number) => {
		setActualMusic(musics[index])
	}

	useEffect(() => {
		if (musics.length > 0) nextTrack(0)
	}, [musics])

	useEffect(() => {
		const actualMusicIndex = musics.indexOf(actualMusic)
		if (actualMusicIndex !== musics.length - 1) {
			setTimeout(
				() => nextTrack(actualMusicIndex + 1),
				actualMusic.duration * 1000
			)
		}
	}, [actualMusic])

	useEffect(() => {
		const effect = async () => {
			setPlaylists(await getPlaylists())
			setQuickPlaylists(await getTop4Playlists())
		}
		effect()
		console.log(playlists)
	}, [])

	useEffect(() => {
		updatePlaylistPlayedTimes(actualPlaylist)
	}, [actualPlaylist])

	return (
		<AudioContext.Provider
			value={{
				isPlaying,
				actualMusic,
				actualPlaylist,
				playlists,
				quickPlaylists,
				play,
				listenPlaylist,
			}}
		>
			{children}
		</AudioContext.Provider>
	)
}
